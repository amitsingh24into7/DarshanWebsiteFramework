import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Apiconfig } from '../../../@core/utils';

@Component({
  selector: 'ngx-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  teamlistobj: any;
  postobj:{templeid:number,clientid:string,appid:string,roleid}={templeid:null,clientid:'',appid:'',roleid:''}
  imageurl: string;
 
  constructor(private router: Router, private httpClient: HttpClient,public API:Apiconfig) {
    this.imageurl=API.imageurl
   }

  ngOnInit() {
    //this.teamlistobj=[{picture:'darshanapp/uploadFiles/16.jpeg',name:'werwer',Phone:'werwere',	Role:'2323',Email:'232323@sdfs'}];
    this.httpClient.get("assets/config.json").subscribe(data =>{
    
      let jsonobj=JSON.parse(JSON.stringify(data));
      this.postobj.templeid=jsonobj.templeID
      // console.log(data);
      //this.products = data;

     this.API.callAPI('getteambytemple.php',this.postobj).subscribe((resp)=>{
        this.teamlistobj=resp

        // console.log(JSON.stringify(resp))
      });
      
    })
  }

}
