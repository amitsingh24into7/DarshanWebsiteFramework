import { HttpClient } from '@angular/common/http';

import { Injectable, Inject, PLATFORM_ID, OnDestroy } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { NavigationEnd, Router } from '@angular/router';
import { NB_DOCUMENT } from '@nebular/theme';
import { filter, takeUntil, map, catchError } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Injectable()
export class Apiconfig implements OnDestroy {
    private readonly  apiurl:string;
    private  appid:string
    private clientid:string
    private roleid:string

    public isLogin=false;
    public username:string="";
    //public paypostobj:{tempelobj:}
    ///public testobj:{name:string,phone:number}={name:"hjhjhj",phone:90909};
     public paypostobj:{
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
    public imageurl="https://motleystack.com/darshanapp_common_dev/"
  private readonly destroy$ = new Subject<void>();
  private readonly dom: Document;
  private readonly isBrowser: boolean;
  private linkCanonical: HTMLLinkElement;
  apiKey : string = 'AIzaSyBgZTMBKdCgOQ6hcfLM4ciBza6DuiF1os0';

  constructor(
    private router: Router,private httpClient: HttpClient,
    @Inject(NB_DOCUMENT) document,
    @Inject(PLATFORM_ID) platformId,
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
    this.dom = document;
    this.apiurl='https://motleystack.com/darshanapp_common_dev/darshanapp/';
    this.appid='DARSHANAPP'
    this.clientid='CLIENTID6'
    this.roleid='DARSHANUSER'
    if(JSON.parse(localStorage.getItem('logininfo'))){
     let  userinfo=JSON.parse(localStorage.getItem('logininfo'))
      this.isLogin=true;
      debugger;
      this.username=userinfo.name
    }
   
    if (this.isBrowser) {
      this.createCanonicalTag();
    }
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  createCanonicalTag() {
    this.linkCanonical = this.dom.createElement('link');
    this.linkCanonical.setAttribute('rel', 'canonical');
    this.dom.head.appendChild(this.linkCanonical);
    this.linkCanonical.setAttribute('href', this.getCanonicalUrl());
  }

  trackCanonicalChanges() {
    if (!this.isBrowser) {
      return;
    }

    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      takeUntil(this.destroy$),
    )
      .subscribe(() => {
        this.linkCanonical.setAttribute('href', this.getCanonicalUrl());
      });
  }

  private getCanonicalUrl(): string {
    return this.dom.location.origin + this.dom.location.pathname;
  }
  callAPI(apiname,dataobj)
{
    dataobj.clientid=this.clientid
    dataobj.appid=this.appid
    dataobj.roleid=this.roleid

    //  let respobj= this.httpClient.post(this.apiurl+apiname,dataobj)
    //  respobj.subscribe(dataobj=>{
    //    //return   dataobj;
    //  })
    //  return respobj

    return this.httpClient.post(this.apiurl+apiname,dataobj)
    .pipe(map((response: Response) => {
        return response;
    }), catchError(error => {
        //this.onError(error);
        return Promise.reject(error);
    }));

}
youtubecallAPI(channel, maxResults){
  debugger;
  let url = 'https://www.googleapis.com/youtube/v3/search?key=' + this.apiKey + '&channelId=' + channel + '&order=date&part=snippet &type=video,id&maxResults=' + maxResults
  return this.httpClient.get(url)
  .pipe(map((response: Response) => {
    return response;
}), catchError(error => {
    //this.onError(error);
    return Promise.reject(error);
}));
}
}