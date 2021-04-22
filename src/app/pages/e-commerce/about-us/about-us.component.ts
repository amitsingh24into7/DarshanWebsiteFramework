import { Component, OnInit } from '@angular/core';
import { NbAuthService } from '@nebular/auth';
import { HttpClient } from '@angular/common/http';
import { Apiconfig } from '../../../@core/utils';
import { NbMenuService } from '@nebular/theme';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  postobj:{TempleID:number,clientid:string,appid:string,roleid}={TempleID:null,clientid:'',appid:'',roleid:''}
  announcementlist: Response;
  address: Response;
  
  constructor(private authService: NbAuthService,private httpClient: HttpClient,public API:Apiconfig,private router: Router,private menuServ: NbMenuService) {

    //this.imageurl=API.imageurl

   }
   ngOnInit() {


    this.httpClient.get("assets/config.json").subscribe(data =>{
       
      let jsonobj=JSON.parse(JSON.stringify(data));
      this.postobj.TempleID=jsonobj.templeID
      // console.log(data);
      //this.products = data;
      // {"templeid":105,"clientid":"CLIENTID6","appid":"DARSHANAPP","roleid":"DARSHANUSER"}
      // {"clientid":"CLIENTID6","appid":"DARSHANAPP","userid":"1"}

     this.API.callAPI('gettempleaddressdetails.php',this.postobj).subscribe((resp)=>{
        this.address=resp

        // console.log(JSON.stringify(resp))
      });
      
    })

  }

}
