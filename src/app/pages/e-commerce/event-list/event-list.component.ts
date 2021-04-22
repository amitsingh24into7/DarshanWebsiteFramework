import { Component, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Apiconfig} from '../../../@core/utils/apiconfig.service'
import { Router } from '@angular/router';
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'ngx-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {
  @Output() someEvent = new EventEmitter();
  flipped: boolean;
postobj:{templeid:number,clientid:string,appid:string,roleid}={templeid:null,clientid:'',appid:'',roleid:''}
  eventlistobj: any;
  eventDetail:any;
  imageurl: string;
  constructor(private router: Router, private httpClient: HttpClient,public API:Apiconfig) {
    this.imageurl=API.imageurl
   }


  ngOnInit() {
    
    //const flipped = false;
    this.httpClient.get("assets/config.json").subscribe(data =>{
    
      let jsonobj=JSON.parse(JSON.stringify(data));
      this.postobj.templeid=jsonobj.templeID
      // console.log(data);
      //this.products = data;

     this.API.callAPI('gettempleeventsbyadmin.php',this.postobj).subscribe((resp)=>{
        this.eventlistobj=resp

        // console.log(JSON.stringify(resp))
      });
      
    })
    
  }
  toggleView(detailobj:any) {
    if(detailobj){
      this.eventDetail=detailobj;
      window.scrollTo(0,  20);
    }
    this.flipped = !this.flipped;
  }
  callDonatemodule(datatobj){
    //this.router.navigate(['/login'],{ replaceUrl: true })
    
  this.router.navigate(['pages/e-commerce/DonationForm'], { state: { eventdata: datatobj } });
   
  }
}





