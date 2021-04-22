import { Component, OnInit } from '@angular/core';
import { NbAuthService } from '@nebular/auth';
import { HttpClient } from '@angular/common/http';
import { Apiconfig } from '../../../@core/utils';
import { NbMenuService } from '@nebular/theme';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.scss']
})
export class AnnouncementsComponent implements OnInit {
  postobj:{templeid:number,clientid:string,appid:string,roleid,userid:string}={templeid:null,clientid:'',appid:'',roleid:'',userid:'PUBLIC'}
  announcementlist: Response;
  
  constructor(private authService: NbAuthService,private httpClient: HttpClient,public API:Apiconfig,private router: Router,private menuServ: NbMenuService) {
    //this.imageurl=API.imageurl
   }

  ngOnInit() {


    this.httpClient.get("assets/config.json").subscribe(data =>{
       
      let jsonobj=JSON.parse(JSON.stringify(data));
      this.postobj.templeid=jsonobj.templeID
      // console.log(data);
      //this.products = data;
      // {"templeid":105,"clientid":"CLIENTID6","appid":"DARSHANAPP","roleid":"DARSHANUSER"}
      // {"clientid":"CLIENTID6","appid":"DARSHANAPP","userid":"1"}

     this.API.callAPI('getusernotification.php',this.postobj).subscribe((resp)=>{
        this.announcementlist=resp

        // console.log(JSON.stringify(resp))
      });
      
    })

  }

}
