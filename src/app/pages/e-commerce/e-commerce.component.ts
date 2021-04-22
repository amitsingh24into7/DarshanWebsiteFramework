import { Component, OnInit } from '@angular/core';
import { IPayPalConfig, ICreateOrderRequest } from 'ngx-paypal';
import { Apiconfig } from '../../@core/utils';
import { NbDialogService } from '@nebular/theme';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'ngx-ecommerce',
  templateUrl: './e-commerce.component.html',
  
})
export class ECommerceComponent implements OnInit {

  flipped = false;
  templetimelist: Response;
  templetimeArtilist: Response;
  templedetail: Response;

  toggleView() {
    this.flipped = !this.flipped;
    //alert()
    // onActivate(e, outlet){
    //   outlet.scrollTop = 0;
    // }
  }
  public payPalConfig?: IPayPalConfig;
  showSuccess: boolean;
  constructor(public API:Apiconfig,private httpClient: HttpClient) {
    this.initConfig()
   }

   someFunction(data){
    let el = document.getElementById(data);
    debugger
    el.scroll(0,0);
    //el.scrollTo = el.scrollHeight;
    //el.scrollTop = el.scrollHeight;
   }


  ngOnInit(): void {
    //throw new Error("Method not implemented.");
    debugger;
    let temppostobj:{clientid:string,appid:string,roleid:string, templeid:string,servicetype:string,alldays:string}={clientid:'',appid:'',roleid:'',templeid:'',servicetype:'POOJA',alldays:'AllDAYS'}

    this.httpClient.get("assets/config.json").subscribe(data =>{
     
      let jsonobj=JSON.parse(JSON.stringify(data));
      temppostobj.clientid=jsonobj.CLIENTID
      temppostobj.appid=jsonobj.APPID
      temppostobj.templeid=jsonobj.templeID
      temppostobj.roleid=jsonobj.roleid
      this.API.callAPI('getcurrentservicetiming.php',temppostobj).subscribe((resp)=>{
        this.templetimelist=resp
               
        let templedetailobj:{TempleID:String,clientid:String,appid:String,roleid:String}={TempleID:jsonobj.templeID,clientid:jsonobj.CLIENTID,appid:jsonobj.APPID,roleid:jsonobj.roleid}

       // // console.log(JSON.stringify(resp))
        this.API.callAPI('gettempleaddressdetails.php',templedetailobj).subscribe((respobj)=>{
          debugger;
          this.templedetail=respobj[0].ShortDesc
  
         // // console.log(JSON.stringify(resp))
        });
      });
      
      let temppostobjForarti:{clientid:string,appid:string,templeid:string,servicetype:string,alldays:string}={clientid:'',appid:'',templeid:'',servicetype:'AARATI',alldays:'AllDAYS'}
      temppostobjForarti.clientid=jsonobj.CLIENTID
      temppostobjForarti.appid=jsonobj.APPID
      temppostobjForarti.templeid=jsonobj.templeID
      this.API.callAPI('getcurrentservicetiming.php',temppostobjForarti).subscribe((resp)=>{
        this.templetimeArtilist=resp
        // console.log(JSON.stringify(resp))
      });
    })
    
  }
  
 private initConfig(): void{
    this.payPalConfig = {
    currency: 'EUR',
    clientId: 'sb',
    createOrderOnClient: (data) => <ICreateOrderRequest>{
      intent: 'CAPTURE',
      purchase_units: [
        {
          amount: {
            currency_code: 'EUR',
            value: '0.01',
            breakdown: {
              item_total: {
                currency_code: 'EUR',
                value: '0.01'
              }
            }
          },
          items: [
            {
              name: 'Enterprise Subscription',
              quantity: '1',
              category: 'DIGITAL_GOODS',
              unit_amount: {
                currency_code: 'EUR',
                value: '9.99',
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
    onClientAuthorization: (data) => {
      // console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);
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
  }


  
}