import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Apiconfig } from '../../../@core/utils';
import { AuthService } from 'angularx-social-login';


@Component({
  selector: 'ngx-one-column-layout',
  styleUrls: ['./one-column.layout.scss'],
  template: `
    <nb-layout windowMode>
    <nb-layout-header id="windowMode"  style="position: fixed ;z-index: 1040; padding:0px" class="tophead">
        <div>
          <div style="color:#ffffff; font-size:13px; float:left" >
          {{newdate}} {{date | date: 'dd'}} , {{date | date: 'yyyy'}}
          </div>
          <div style=" right: 0px !important; position: absolute; ">
  
 <!-- <img style="width: 14%;margin: 0px 19px; float:right" src="assets/images/google_play.png"/>
  <img style="width: 14%; float:right" src="assets/images/appstore.png"/>-->


  
  <span class="created-by" style="font-size: 15px;cursor: pointer;float: right;margin-left: 10px;margin-top: -7px !important;"><b style="cursor: pointer; "><a title="Twitter" style="cursor: pointer; color:#ffffff ; float:right"  target="_blank" href="https://twitter.com/sdst1901?lang=en"> <nb-icon icon="twitter-outline"></nb-icon></a></b></span>
 
  <span class="created-by" style="font-size: 15px;cursor: pointer;float: right;margin-left: 10px;margin-top: -8px !important;"><b style="cursor: pointer; "><a title="Facebook" style="cursor: pointer; color:#ffffff ; float:right" target="_blank" href="https://www.facebook.com/SriDattaSaiMandir/"><nb-icon icon="facebook-outline"></nb-icon></a></b></span>
  
  

  <span class="created-by" style="font-size:12px;cursor: pointer;float: right;margin-left: 10px; margin-top: -8px !important;"><b style="cursor: pointer; "><a title="Contact Us" style="cursor: pointer; color:#ffffff ; float:right" (click)="openpage('/pages/maps/gmaps')"  ><nb-icon icon="at-outline"></nb-icon></a></b></span>

  <span class="created-by" style="font-size:12px; cursor: pointer;float: right;margin-left: 10px; margin-top: -8px !important;"><b style="cursor: pointer; "><a title="Feedback" style="cursor: pointer; color:#ffffff ; float:right" (click)="openpage('/pages/e-commerce/feedback')" class="ion question_answer" ><nb-icon icon="phone-outline"></nb-icon></a></b></span>
  
  <span class="created-by" *ngIf="API.isLogin"  style="font-size:12px; cursor: pointer;float: right;margin-left: 10px; margin-top: -8px !important;"><b style="cursor: pointer; "><a title="My Account" style="cursor: pointer; color:#ffffff ; float:right"   (click)="openpage('/pages/e-commerce/donation-list')" > <nb-icon icon="person-outline"></nb-icon></a></b></span>

  <span class="created-by" *ngIf="API.isLogin"  style="font-size:12px; cursor: pointer;float: right;margin-left: 10px; margin-top: -8px !important;"><b style="cursor: pointer; "><a title="Sign out" style="cursor: pointer; color:#ffffff ; float:right"   (click)="signout()" > <nb-icon icon="lock-outline"></nb-icon></a></b></span>

  <span class="created-by d-none d-md-block" *ngIf="API.isLogin"  style="font-size:12px; cursor: pointer;float: right;margin-left: 10px; margin-top: 0px !important; color:#fff"><b style="cursor: pointer; "> Welcome {{API.username}}</b> </span>

          </div>
        </div>       
      </nb-layout-header>
      <nb-layout-header style="border:1px solid #ffffff" fixed>
       
        <ngx-header></ngx-header>
      </nb-layout-header>

      <nb-sidebar style="border-left:2px solid #ffffff" class="menu-sidebar" tag="menu-sidebar" responsive>
        <ng-content select="nb-menu">
       
        </ng-content>
 <!--<label style="margin-top: 25px;width: 50%;float: left;"><img style="width: 90px;" src="assets/images/google_play.png"/>
 </label>
 <label style="margin-top: 25px;width: 50%;float: left;">
 <img style="width: 90px;" src="assets/images/appstore.png"/>
 </label>-->
      </nb-sidebar>

      <nb-layout-column id="bodybox" >
        <ng-content select="router-outlet"></ng-content>
      </nb-layout-column>

      <nb-layout-footer fixed>
        <ngx-footer></ngx-footer>
      </nb-layout-footer>
    </nb-layout>
  `,
})
export class OneColumnLayoutComponent  implements OnInit{
   dateObj = new Date();
   days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
   monthNames = [ 'January', 'February', 'March', 'April', 'May', 'June',
'July', 'August', 'September', 'October', 'November', 'December' ];

month = this.dateObj.getUTCMonth() + 1; //months from 1-12

monthname=this.monthNames[this.month - 1];
//day = this.dateObj.getUTCDate();
year = this.dateObj.getFullYear();
//date=this.dateObj.getDay();
day =this.days[ this.dateObj.getDay()];
date = new Date();
newdate = this.day+ " , "+ this.monthname+" "
  islogin: boolean;
 
constructor(private router: Router,public API:Apiconfig,private socialAuthService: AuthService,){
  
}
ngOnInit() {
  // alert();
  // this.islogin=this.API.isLogin;
 //console.log(JSON.stringify(localStorage.getItem('logininfo')));
}
   
openpage(url){
    
  this.router.navigate([url]);
    }
    signout(){
      this.socialAuthService.signOut()
              localStorage.removeItem('APIlogininfo');
              localStorage.removeItem('logininfo');
              this.API.isLogin=false;
              this.router.navigate(['pages/dashboard']);
    }
}
