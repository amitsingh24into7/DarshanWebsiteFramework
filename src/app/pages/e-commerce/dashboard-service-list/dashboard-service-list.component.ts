import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Apiconfig } from '../../../@core/utils';

import { tap } from 'rxjs/operators';
import { CanActivate, Router } from '@angular/router';
import { IPayPalConfig, ICreateOrderRequest } from 'ngx-paypal';
import { NbMenuService } from '@nebular/theme';
import { NbAuthService } from '@nebular/auth';

@Component({
  selector: 'ngx-dashboard-service-list',
  templateUrl: './dashboard-service-list.component.html',
  styleUrls: ['./dashboard-service-list.component.scss']
})
export class DashboardServiceListComponent implements  OnInit {
  @ViewChild('myelement',{ static: true }) myelement : ElementRef;
  public payPalConfig?: IPayPalConfig;



  imageurl:string
  flipped: boolean;
  postobj:{templeid:number,clientid:string,appid:string,roleid}={templeid:null,clientid:'',appid:'',roleid:''}
    servicelistobj: any;
    serviceDetail:any;
  showSuccess: boolean;
  myTag: any;
  @Output() someEvent = new EventEmitter();
    constructor(private authService: NbAuthService,private httpClient: HttpClient,public API:Apiconfig,private router: Router,private menuServ: NbMenuService,public El:ElementRef) {
      this.imageurl=API.imageurl
     
    
     }
  
  
    ngOnInit() {
      //this.initConfig(null);
      //const flipped = false;
      this.httpClient.get("assets/config.json").subscribe(data =>{
       
        let jsonobj=JSON.parse(JSON.stringify(data));
        this.postobj.templeid=jsonobj.templeID
        // console.log(data);
        //this.products = data;
  
       this.API.callAPI('gettempleservice.php',this.postobj).subscribe((resp)=>{
          this.servicelistobj=resp
  
          // console.log(JSON.stringify(resp))
        
        });
        
      })
      
    }
    toggleView(detailobj:any) {
      debugger;
      this.flipped = !this.flipped;
      if(detailobj){
        this.serviceDetail=detailobj;
        if(this.router.url=='/pages/e-commerce/service-list'){
          let el=document.getElementById('bodybox')
          el.scroll(0,0);
        }
        //this.myelement.nativeElement.focus();
        
      }
     
    }



callDonatemodule(datatobj,amount){
  //this.router.navigate(['/login'],{ replaceUrl: true })
  
this.router.navigate(['pages/e-commerce/DonationForm'], { state: { data: datatobj,amount:amount } });
 
}
  
}