import { Component, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Apiconfig} from '../../../@core/utils/apiconfig.service'
import { Router } from '@angular/router';
import { EventEmitter } from '@angular/core';
import { IPayPalConfig, ICreateOrderRequest } from 'ngx-paypal';

@Component({
  selector: 'ngx-cult-activ',
  templateUrl: './cult-activ.component.html',
  styleUrls: ['./cult-activ.component.scss']
})
export class CultActivComponent implements  OnInit {
  @Output() someEvent = new EventEmitter();
  flipped: boolean;
  isDetail:boolean;
  showSuccess: boolean;
  public payPalConfig?: IPayPalConfig;
  
  public get_pg_configobj:{appid:string,roleid:string,templeID:string,userid:string}={appid:'',roleid:'',templeID:'',userid:''}



postobj:{templeid:number,clientid:string,appid:string,roleid}={templeid:null,clientid:'',appid:'',roleid:''}
postobj_n:{TempleID:number,clientid:string,appid:string,roleid}={TempleID:null,clientid:'',appid:'',roleid:''}
  eventlistobj: any;
  eventDetail:any;
  imageurl: string;
  paymentlist_obj: any;
  window_history: any;
  templedetail: Response;
  payPalclientId: any;

  @Output() onCreate: EventEmitter<any> = new EventEmitter<any>();
  public item_of_pay=[{ra_v:1001},{ra_v:1002}]
  paymentAmount: string = '3.33';
  currency: string = 'INR';
  currencyIcon: string = '₹';
  constructor(private router: Router, private httpClient: HttpClient,public API:Apiconfig) {
    this.imageurl=API.imageurl
   }


  ngOnInit() {
    
    //const flipped = false;
    this.httpClient.get("assets/config.json").subscribe(data =>{
    
      let jsonobj=JSON.parse(JSON.stringify(data));
      this.postobj.templeid=jsonobj.templeID
      this.postobj_n.TempleID=jsonobj.templeID
      // console.log(data);
      //this.products = data;

     this.API.callAPI('getCultural_EventTimelist.php',this.postobj).subscribe((resp)=>{
        this.eventlistobj=resp
      //this.onloadfunction();
        // console.log(JSON.stringify(resp))
      });


      if(window.history.state.fromindex=='pages/dashboard'){
        debugger;
        this.isDetail=true;
        this.onloadfunction('');
      }
     
    })
    // if(window.history.state.eventdata){
    //   debugger;
    // }

    
  }
  //////////////////////////////

  onloadfunction(detailobj:any){
    //let tempvalobj:any
    if(detailobj!=''){
      this.window_history=detailobj
    }else{
      this.window_history=window.history.state.eventdata;

    }
    
    this.API.callAPI('getCultural_Event_donation_list_by_id.php',this.window_history).subscribe((resp)=>{
      this.paymentlist_obj=resp
      // this.paymentlist_obj.forEach(function (value) {
      //   console.log(value);
      // }); 
      for(let i = 0; i <= this.paymentlist_obj.length; i++){
        debugger
        if(this.paymentlist_obj[i]){
          this.paypal_button(i+1,this.paymentlist_obj[i].amount,this.paymentlist_obj[i].payment_url,this.paymentlist_obj[i].id)
        }
       
      } 
      
      this.API.callAPI('gettempleaddressdetails.php',this.postobj_n).subscribe((resp)=>{
        this.templedetail=resp[0]
        this.onCreate.emit('dummy'); 
      });
      

      // console.log(JSON.stringify(resp))
    });
  } 
paypal_button(ival,value,currency,id){
  //let _this = this;

  // this.httpClient.get("assets/config.json").subscribe(data =>{
  //   let jsonobj=JSON.parse(JSON.stringify(data));
       
  //   this.get_pg_configobj.appid=jsonobj.APPID;
  //   this.get_pg_configobj.roleid=jsonobj.ROLE_ID;
  //   this.get_pg_configobj.templeID=jsonobj.templeID;
    
  // })
  setTimeout(() => {
    // Render the PayPal button into #paypal-button-container
    <any>window['paypal'].Buttons({

      // Set up the transaction
      createOrder: function (data, actions) {
        return actions.order.create({
          purchase_units: [
         
          {
            amount: {
              currency_code: currency,
              value: value,///amount
              //value:'0.01',
              breakdown: {
                item_total: {
                  currency_code: currency,
                  value: value ///amount
                  //value:'0.01',
                }
              }
            },
            items: [
              {
                name: 'name',// title
                quantity: '1',
                category: 'DIGITAL_GOODS',
                unit_amount: {
                  currency_code: currency,
                  value: value,///amount,
                  //value:'0.01',
                },
              }
            ]
          }
        ]
        });
      },

      // Finalize the transaction
      onApprove:  (data, actions)=> {
        let details=actions.order.capture()
          .then((details)=> {
            
        
        // this.API.callAPI('insertpaymenttransactions.php',paypostobj).subscribe((resp)=>{
        //  //  this.servicelistobj=resp
        //  this.router.navigate(['pages/e-commerce/donation-list']);
        //   // console.log(JSON.stringify(resp))
        // });
    
        
        let  paypostobj:{
          tempelobj:
          {email:string,userid:string,ItemDetails:string,Amount:string,Currency:string,Remarks:string,ConfirmationBox:string,templeid:string,templeName:string,serviceid:string,serviceNmae:string,eventid:string,eventName:string,sponsorshipID:string},
    
          paypalresp:{client:{environment:string,paypal_sdk_version:string,platform:string,product_name:string},
          response:{create_time: string,id:string,intent:string,state:string}
         }
        }={
         tempelobj:
         {email:'',userid:'',ItemDetails:'',Amount:'',Currency:'',Remarks:'',ConfirmationBox:'',templeid:'',templeName:'',serviceid:'',serviceNmae:'',eventid:'',eventName:'',sponsorshipID:''},
    
         paypalresp:{client:{environment:'',paypal_sdk_version:'',platform:'web',product_name:''},
         response:{create_time: '',id:'',intent:'',state:''}
        }
       }
    console.log(paypostobj);


    this.httpClient.get("assets/config.json").subscribe(data =>{
      let jsonobj=JSON.parse(JSON.stringify(data));
        debugger;
        // Show a success message to the buyer
        let tempuser=JSON.parse(localStorage.getItem('APIlogininfo'))
        paypostobj.paypalresp.response.create_time=details['purchase_units'][0]["payments"].captures[0].create_time;
        paypostobj.paypalresp.response.id=details['purchase_units'][0]["payments"].captures[0].id;
        paypostobj.paypalresp.response.intent=''
        paypostobj.paypalresp.response.state=details['purchase_units'][0]["payments"].captures[0].status
         
        paypostobj.tempelobj.email=tempuser.user.UserID
        paypostobj.tempelobj.userid=tempuser.user.ID
       paypostobj.tempelobj.ItemDetails=''
        paypostobj.tempelobj.Amount=value
          paypostobj.tempelobj.Currency=currency
          paypostobj.tempelobj.serviceid=this.window_history.EventsID+'_'+id
          paypostobj.tempelobj.serviceNmae=this.window_history.EventsTitle
        
       
        
        paypostobj.tempelobj.Remarks=details.EventsLongDesc
        paypostobj.tempelobj.ConfirmationBox=''
        paypostobj.tempelobj.templeid=jsonobj.templeID;
        paypostobj.tempelobj.templeName=details.EventsTitle
        
        //this.API.paypostobj.tempelobj.eventid=''
       // this.API.paypostobj.tempelobj.eventName=EventsTitle
       paypostobj.tempelobj.sponsorshipID=''
    debugger;
        this.API.callAPI('insertpaymenttransactions.php',paypostobj).subscribe((resp)=>{
          //  this.servicelistobj=resp
          this.router.navigate(['pages/e-commerce/donation-list']);
           // console.log(JSON.stringify(resp))
           this.showSuccess = true;
         });

        });


            alert('Transaction completed by ' + details.payer.name.given_name + '!');
          })
          .catch(err => {
            console.log(err);
          })
          //this.API
          

      }
    }).render('#paypal-button-container_'+ival);
  }, 500)
}
//////////////////////////////
  toggleViewdef(){
    if(this.flipped){
      this.flipped = !this.flipped;
    }
    
  }
  toggleView(detailobj:any) {
    if(detailobj){
      this.eventDetail=detailobj;
      window.scrollTo(0,  20);
      this.onloadfunction(detailobj);
    }

    this.flipped = !this.flipped;
  }
  callDonatemodule(datatobj){
    //this.router.navigate(['/login'],{ replaceUrl: true })
    
  this.router.navigate(['pages/e-commerce/DonationForm'], { state: { eventdata: datatobj } });
   
  }

  insertfybction(postobj){

  }
  toggleViewVolunteering(datatobj){
    if(this.API.isLogin){
      this.router.navigate(['pages/e-commerce/volunteering'], { state: { eventdata: datatobj,fromindex:'pages/e-commerce/cultural' } });
      }else{
        this.router.navigate(['pages/e-commerce/login'], { state: { c_eventdata: datatobj,fromindex:'pages/e-commerce/cultural' } });
       }
    
  }


 // ========= PayPal=============

 private initConfig(detailobj:any): void {
  debugger 
  
    var currency=detailobj.ServiceCurrency;
   var  value= detailobj.ServiceAmount;
   var name= detailobj.ServiceTitle;
   var idval=detailobj.ServiceID;
  
  this.httpClient.get("assets/config.json").subscribe(data =>{
  let jsonobj=JSON.parse(JSON.stringify(data));
     
  this.get_pg_configobj.appid=jsonobj.APPID;
  this.get_pg_configobj.roleid=jsonobj.ROLE_ID;
  this.get_pg_configobj.templeID=jsonobj.templeID;
  this.API.callAPI('get_pg_config.php',this.get_pg_configobj).subscribe((resp)=>{
    debugger;
    this.payPalclientId=resp[0].clientId;
 


  ///clientId: 'Aa9FbMGhZdA__JbQzX91dQ0WwPZmv6SWRjvvpskBPV1zWsI2BV3mTtBdirnqQrOjxsy2CcSwMLa3cR54',
   this.payPalConfig = {
   
   currency: currency,
   clientId: this.payPalclientId,
   
   createOrderOnClient: (data) => <ICreateOrderRequest>{
     intent: 'CAPTURE',
     purchase_units: [
       {
         amount: {
           currency_code: currency,
           value: value,///amount
           //value:'0.01',
           breakdown: {
             item_total: {
               currency_code: currency,
               value: value ///amount
               //value:'0.01',
             }
           }
         },
         items: [
           {
             name: name,// title
             quantity: '1',
             category: 'DIGITAL_GOODS',
             unit_amount: {
               currency_code: currency,
               value: value,///amount,
               //value:'0.01',
             },
           }
         ]
       }
     ]
   },
   advanced: {
     commit: 'true'
   },
   style: {
     label: 'paypal',
    
     layout: 'vertical'
   },
   onApprove: (data, actions) => {
     // console.log('onApprove - transaction was approved, but not authorized', data, actions);
     actions.order.get().then(details => {
       // console.log('onApprove - you can get full order details inside onApprove: ', details);
     });
   },
   onClientAuthorization: (dataobj) => {
     // console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', dataobj);
     //let tempobj=dataobj['purchase_units'][0].amount.value

     
     debugger;
     
          let tempuser=JSON.parse(localStorage.getItem('APIlogininfo'))
         this.API.paypostobj.paypalresp.response.create_time=dataobj['purchase_units'][0]["payments"].captures[0].create_time;
         this.API.paypostobj.paypalresp.response.id=dataobj['purchase_units'][0]["payments"].captures[0].id;
         this.API.paypostobj.paypalresp.response.intent=''
         this.API.paypostobj.paypalresp.response.state=dataobj['purchase_units'][0]["payments"].captures[0].status
          
         this.API.paypostobj.tempelobj.email=tempuser.user.UserID
         this.API.paypostobj.tempelobj.userid=tempuser.user.ID
         this.API.paypostobj.tempelobj.ItemDetails=''
         this.API.paypostobj.tempelobj.Amount=value
            this.API.paypostobj.tempelobj.Currency=currency
            this.API.paypostobj.tempelobj.serviceid=idval
            this.API.paypostobj.tempelobj.serviceNmae=name
         
        
         
         this.API.paypostobj.tempelobj.Remarks=detailobj.EventsLongDesc
         this.API.paypostobj.tempelobj.ConfirmationBox=''
         this.API.paypostobj.tempelobj.templeid=detailobj.TempleID
         this.API.paypostobj.tempelobj.templeName=detailobj.EventsTitle
         
         //this.API.paypostobj.tempelobj.eventid=''
        // this.API.paypostobj.tempelobj.eventName=EventsTitle
         this.API.paypostobj.tempelobj.sponsorshipID=''
     debugger;
     this.API.callAPI('insertpaymenttransactions.php',this.API.paypostobj).subscribe((resp)=>{
      //  this.servicelistobj=resp
      this.router.navigate(['pages/e-commerce/donation-list']);
       // console.log(JSON.stringify(resp))
     });
 
     this.showSuccess = true;
   },
   onCancel: (data, actions) => {
     // console.log('OnCancel', data, actions);
   },
   onError: err => {
     // console.log('OnError', err);
   },
   onClick: (data, actions) => {
     // console.log('onClick', data, actions);
 
 
   },
 };
})
})
 }

 paypalMethod(item){
   debugger
   let detailobj:{EventsCurrency:string,TempleID:string,EventsAmount:string,EventsLongDesc:string,EventsTitle:string,EventsID:string}={EventsCurrency:'',TempleID:'',EventsAmount:'',EventsLongDesc:'',EventsTitle:'',EventsID:''}
   detailobj.EventsCurrency=item.payment_url
   detailobj.TempleID=item.templeID
   detailobj.EventsAmount=item.amount
   detailobj.EventsLongDesc=item.payment_desc
   detailobj.EventsTitle= this.window_history.EventsTitle
   detailobj.EventsID=item.eventID
  // this.initConfig(detailobj)
}

}




