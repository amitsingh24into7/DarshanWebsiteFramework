import { Component, OnInit, ViewChild } from '@angular/core';

import { IPayPalConfig, ICreateOrderRequest, NgxPaypalComponent, PayPalScriptService } from 'ngx-paypal';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-donation-modelpage',
  templateUrl: './donation-modelpage.component.html',
  styleUrls: ['./donation-modelpage.component.scss']
})
export class DonationModelpageComponent implements OnInit {
  // @ViewChild('payPalElem1',{static: false}) paypalComponent1?:  NgxPaypalComponent;
  // @ViewChild('payPalElem2',{static: false}) paypalComponent2?:  NgxPaypalComponent;
  // @ViewChild('payPalElem3',{static: false}) paypalComponent3?:  NgxPaypalComponent;
  // @ViewChild('payPalElem4',{static: false}) paypalComponent4?:  NgxPaypalComponent;
  constructor(private router: Router) {
    
   }
 
  public payPalConfig?: IPayPalConfig;
  showSuccess: boolean;

  ngOnInit(): void {
    this.initConfig();
  }

opendonationpage(donationfor){
    
  
this.router.navigate(['pages/e-commerce/DonationForm'], { state: { normaldonatio:donationfor  } });
  }

  private initConfig(): void {
    this.payPalConfig = {
    currency: 'EUR',
    clientId: 'Aa9FbMGhZdA__JbQzX91dQ0WwPZmv6SWRjvvpskBPV1zWsI2BV3mTtBdirnqQrOjxsy2CcSwMLa3cR54',
    createOrderOnClient: (data) => <ICreateOrderRequest>{
      intent: 'CAPTURE',
      purchase_units: [
        {
          amount: {
            currency_code: 'EUR',
            value: '9.99',
            breakdown: {
              item_total: {
                currency_code: 'EUR',
                value: '9.99'
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
