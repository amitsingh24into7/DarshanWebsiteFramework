import { Component, OnInit } from '@angular/core';
import { Apiconfig } from '../../../@core/utils';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-donation-list',
  templateUrl: './donation-list.component.html',
  styleUrls: ['./donation-list.component.scss']
})
export class DonationListComponent implements OnInit {
  postobj:{templeid:number,clientid:string,appid:string,roleid:string ,userid:string,usertype:string}={templeid:null,clientid:'',appid:'',roleid:'',userid:'',usertype:''}
  donationObj: Response;
  
  constructor(public API:Apiconfig, private httpClient: HttpClient,private router: Router) {

   }
   

  ngOnInit() {
    this.httpClient.get("assets/config.json").subscribe(data =>{
       
      let jsonobj=JSON.parse(JSON.stringify(data));
      this.postobj.templeid=jsonobj.templeID
      // console.log(data);
      //this.products = data;
     let tempuserinfo=JSON.parse(localStorage.getItem('APIlogininfo'));
     debugger;
      // $userid=$data["userid"];
      // $usertype=$data["usertype"];
      // console.log(tempuserinfo)
      this.postobj.userid=tempuserinfo.user.ID
      this.postobj.usertype=''
     this.API.callAPI('getpaymentdetails.php',this.postobj).subscribe((resp)=>{
        this.donationObj=resp

        // console.log(JSON.stringify(resp))
      });
      
    })
  }
  opendetail(parmobj){
    this.router.navigate(['pages/e-commerce/MydonationDetail'], { state: { donationobj:parmobj } });
  }
}
