import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NbDialogService } from '@nebular/theme';
import { Apiconfig } from '../../../@core/utils';

@Component({
  selector: 'ngx-lunar-calendar-details',
  templateUrl: './lunar-calendar-details.component.html',
  styleUrls: ['./lunar-calendar-details.component.scss']
})
export class LunarCalendarDetailsComponent implements OnInit {
  postobj:{templeid:number,clientid:string,appid:string,roleid:string}={templeid:null,clientid:'',appid:'',roleid:''}
  //clientid=CLIENTID6&appid=DARSHANAPP&templeid=105
  calobj: Response;
  
  constructor(private httpClient: HttpClient,private dialogService: NbDialogService,public API:Apiconfig) { }

  ngOnInit() {
    this.httpClient.get("assets/config.json").subscribe(data =>{
      let jsonobj=JSON.parse(JSON.stringify(data));
      this.postobj.templeid=jsonobj.templeID
      this.postobj.clientid=jsonobj.CLIENTID
      this.postobj.appid=jsonobj.APPID
      this.postobj.roleid=jsonobj.ROLE_ID
      // console.log(data);
     this.API.callAPI('getlunardetails.php',this.postobj).subscribe((resp)=>{
        this.calobj=resp

        // console.log(JSON.stringify(resp))
      });
      
    })
  }

}
