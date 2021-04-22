import { Component, OnInit } from '@angular/core';
import { Apiconfig } from '../../../@core/utils';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'ngx-volunteering-list',
  templateUrl: './volunteering-list.component.html',
  styleUrls: ['./volunteering-list.component.scss']
})
export class VolunteeringListComponent implements OnInit {
  voluntlistobj: Response;

  constructor(public API:Apiconfig, private httpClient: HttpClient) { }

  ngOnInit() {
    this.httpClient.get("assets/config.json").subscribe(data =>{
      let jsonobj=JSON.parse(JSON.stringify(data));
      let istempuser=JSON.parse(localStorage.getItem('APIlogininfo'))
      //console.log(istempuser);
//let formobj=JSON.parse(JSON.stringify(this.volunteeringForm.value));
let postobj:{templeID:number,clientid:string,appid:string,roleid:string,userID:string}={templeID:null,clientid:'',appid:'',roleid:'',userID:''}
    postobj.templeID=jsonobj.templeID
    postobj.appid=jsonobj.APPID
    postobj.userID=istempuser.user.ID;
    postobj.clientid=jsonobj.CLIENTID
    postobj.roleid=jsonobj.ROLE_ID       
        this.API.callAPI('volunteeringList.php',postobj).subscribe((resp)=>{
          this.voluntlistobj=resp
         
          //console.log(JSON.stringify(resp))
        
        });
      })
    
  
  }

}
