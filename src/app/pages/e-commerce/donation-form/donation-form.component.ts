import { Component, OnInit ,ElementRef} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Apiconfig } from '../../../@core/utils';
import { IPayPalConfig, ICreateOrderRequest } from 'ngx-paypal';
import { HttpClient } from '@angular/common/http';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'ngx-donation-form',
  templateUrl: './donation-form.component.html',
  styleUrls: ['./donation-form.component.scss']
})
export class DonationFormComponent implements OnInit {

  donationForm: FormGroup;
  submitted = false;

  requestdata :{ServiceID: String,
    TempleID: String,
    ServiceType: String,
    ServiceTitle: String,
    ServiceCurrency:String,
    ServiceAmount: String,
    ServiceImageID: String,
    ServiceShortDesc: String,
    ServiceLongDesc:String,
    EventsID: String,
    EventsType: String,
    EventsTitle: String,
    EventsCurrency:String,
    EventsAmount: String,
    EventsImageID: String,
    EventsShortDesc: String,
    EventsLongDesc:String,
    OBPageName:String,
    OBPossible: String,
    OBURL: String,
    CreatedDate: String,
    
    ImageName:String,
    ImageURL: String,
    SmallImage: String,
    LargeImage: String}={ServiceID: '',
      TempleID: '',
      ServiceType: '',
      ServiceTitle: '',
      OBPageName:'',
      ServiceShortDesc: '',
      ServiceLongDesc:'',
      OBPossible: '',
      OBURL: '',
      CreatedDate: '',
      ServiceCurrency:'',
      ServiceAmount: '',
      ServiceImageID: '',
      EventsID:'',
      EventsType: '',
    EventsTitle: '',
    EventsCurrency:'',
    EventsAmount: '',
    EventsImageID: '',
    EventsShortDesc: '',
    EventsLongDesc:'',
      ImageName:'',
      ImageURL: '',
      SmallImage: '',
      LargeImage: ''};
  islogin=false
  public payPalConfig?: IPayPalConfig;
  servicelistobj: Object;
  showSuccess: boolean;
  isnormalform: boolean=false;
  currencylist: Response;
  isevent:boolean=false;
  eventrequestdata: any;
  myTag: any;
public get_pg_configobj:{appid:string,roleid:string,templeID:string,userid:string}={appid:'',roleid:'',templeID:'',userid:''}
  payPalclientId: any;
  constructor( private route: ActivatedRoute,private router: Router,public API:Apiconfig,private httpClient: HttpClient,private formBuilder: FormBuilder) {
    
    /*this.httpClient.get("assets/config.json").subscribe(data =>{
       
      let jsonobj=JSON.parse(JSON.stringify(data));
     
      this.get_pg_configobj.appid=jsonobj.APPID;
      this.get_pg_configobj.roleid=jsonobj.ROLE_ID;
      this.get_pg_configobj.templeID=jsonobj.templeID;
      this.API.callAPI('get_pg_config.php',this.get_pg_configobj).subscribe((resp)=>{
        debugger;
        this.payPalclientId=resp[0].clientId;
      })})*/
    
   }

  ngOnInit() {
    
    this.donationForm = this.formBuilder.group({
      currency: ['', Validators.required],
      inputAmount: ['', Validators.required],
      inputDescription: ['', Validators.required],
     
  });

   if(window.history.state.data){
    this.requestdata=window.history.state.data
    if(window.history.state.amount){
      this.requestdata.ServiceAmount=window.history.state.amount
    }
    if(this.islogin=this.API.isLogin ){
      this.initConfig(this.requestdata)
    }

    //this.initConfig(this.requestdata)
    }else if(window.history.state.eventdata){ //-------------------for event
      this.eventrequestdata=window.history.state.eventdata
      this.isevent=true;
      
      let temppostobj:{clientid:string,appid:string,configtype:string}={clientid:'',appid:'',configtype:"CURRENCY"}

      this.httpClient.get("assets/config.json").subscribe(data =>{
       
        let jsonobj=JSON.parse(JSON.stringify(data));
        temppostobj.clientid=jsonobj.CLIENTID
        temppostobj.appid=jsonobj.APPID
        this.API.callAPI('getconfigdata.php',temppostobj).subscribe((resp)=>{
          this.currencylist=resp
  
          // console.log(JSON.stringify(resp))
        });
       
      })
      
      this.isnormalform=true
    }else if (window.history.state.normaldonatio){
     

      let temppostobj:{clientid:string,appid:string,configtype:string}={clientid:'',appid:'',configtype:"CURRENCY"}

      this.httpClient.get("assets/config.json").subscribe(data =>{
       
        let jsonobj=JSON.parse(JSON.stringify(data));
        temppostobj.clientid=jsonobj.CLIENTID
        temppostobj.appid=jsonobj.APPID
        this.API.callAPI('getconfigdata.php',temppostobj).subscribe((resp)=>{
          this.currencylist=resp
  
          // console.log(JSON.stringify(resp))
        });
       
      })
      
      this.isnormalform=true
    }else{
      this.router.navigate(['pages/dashboard']);
    }
   
  }
  
  callDonatemodule(callfrom){
    if(callfrom=='Member'){
      this.router.navigate(['pages/e-commerce/login'],{ state: { Donationdata: this.requestdata } });
    }else{
      this.initConfig(this.requestdata)
    }
    ;
  }
  get f() { return this.donationForm.controls; }
    onSubmit() {
     
        this.submitted = true;

        // stop here if form is invalid
        if (this.donationForm.invalid) {
            return;
        }
        this.httpClient.get("assets/config.json").subscribe(data =>{
          let formobj=JSON.parse(JSON.stringify(this.donationForm.value, null, 4));

          let jsonobj=JSON.parse(JSON.stringify(data));
          if(!this.isevent){
          this.requestdata.ServiceCurrency=formobj.currency
          this.requestdata.TempleID=jsonobj.templeID
          this.requestdata.ServiceAmount=formobj.inputAmount
          this.requestdata.ServiceLongDesc=formobj.inputDescription
          this.requestdata.ServiceTitle=window.history.state.normaldonatio
          this.initConfig(this.requestdata)
          }else{
            this.requestdata.EventsCurrency=formobj.currency
          this.requestdata.TempleID=jsonobj.templeID
          this.requestdata.EventsAmount=formobj.inputAmount
          this.requestdata.EventsLongDesc=formobj.inputDescription
          this.requestdata.EventsTitle= this.eventrequestdata.EventsTitle
          this.requestdata.EventsID=this.eventrequestdata.EventsID
          this.initConfig(this.requestdata)
          }
          
        })
        
       
        // {ServiceID: "48"
        // TempleID: "105"
        // ServiceType: "3"
        // ServiceTitle: "dfsdffsdfsf"
        // OBPageName: ""
        // ServiceShortDesc: "sdfsdfsdf"
        // ServiceLongDesc: "sdfsdfsdf"
        // OBPossible: "0"
        // OBURL: "#"
        // CreatedDate: "2020-01-18"
        // ServiceCurrency: "USD"
        // ServiceAmount: "100"
        // ServiceImageID: "16"
        // ImageName: "16.jpeg"
        // ImageURL: "darshanapp/uploadFiles/16.jpeg"
        // SmallImage: null
        // LargeImage: null}
        
        // display form values on success
        //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.donationForm.value, null, 4));
    }



  // ========= PayPal=============

private initConfig(detailobj:any): void {
  debugger 
  var isevent=this.isevent
  if(!this.isevent){
   
    var currency=detailobj.ServiceCurrency;
   var  value= detailobj.ServiceAmount;
   var name= detailobj.ServiceTitle;
   var idval=detailobj.ServiceID;
  }else{
    var currency=detailobj.EventsCurrency;
    var  value= detailobj.EventsAmount;
    var name= detailobj.EventsTitle;
    var idval=detailobj.EventsID;
  }
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
          if(!isevent){
            
            this.API.paypostobj.tempelobj.serviceid=idval
            this.API.paypostobj.tempelobj.serviceNmae=name
          }else{
           
            this.API.paypostobj.tempelobj.eventid=idval
            this.API.paypostobj.tempelobj.eventName=name
          }
        
         
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
 Cancelfunction(){

  //
  if(window.history.state.fromindex){
    this.router.navigate([window.history.state.fromindex]);
  }else{
    this.router.navigate(['pages/e-commerce/donation']);
  }
  
 }

}
