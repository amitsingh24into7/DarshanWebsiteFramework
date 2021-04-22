import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Apiconfig } from '../../../@core/utils';
import { HttpClient } from '@angular/common/http';
//import { DatePipe } from '@angular/common';
@Component({
  selector: 'ngx-temple-timings',
  templateUrl: './temple-timings.component.html',
  styleUrls: ['./temple-timings.component.scss']
})
export class TempleTimingsComponent implements OnInit {
  templetimelist: Response;
  templetimeArtilist: Response;
  customDate = "Thu Oct 30 2019 06:50:22 GMT+0530";
  constructor( private route: ActivatedRoute,private router: Router,public API:Apiconfig,private httpClient: HttpClient,private formBuilder: FormBuilder)  { }

  ngOnInit() {
    let temppostobj:{clientid:string,appid:string,templeid:string,servicetype:string,alldays:string}={clientid:'',appid:'',templeid:'',servicetype:'POOJA',alldays:'AllDAYS'}

      this.httpClient.get("assets/config.json").subscribe(data =>{
       
        let jsonobj=JSON.parse(JSON.stringify(data));
        temppostobj.clientid=jsonobj.CLIENTID
        temppostobj.appid=jsonobj.APPID
        temppostobj.templeid=jsonobj.templeID
        this.API.callAPI('getallservicetiming.php',temppostobj).subscribe((resp)=>{
          this.templetimelist=resp
          // console.log(JSON.stringify(resp))
        });
        let temppostobjForarti:{clientid:string,appid:string,templeid:string,servicetype:string,alldays:string}={clientid:'',appid:'',templeid:'',servicetype:'AARATI',alldays:'AllDAYS'}
        temppostobjForarti.clientid=jsonobj.CLIENTID
        temppostobjForarti.appid=jsonobj.APPID
        temppostobjForarti.templeid=jsonobj.templeID
        this.API.callAPI('getallservicetiming.php',temppostobjForarti).subscribe((resp)=>{
          this.templetimeArtilist=resp
          // console.log(JSON.stringify(resp))
        });
      })
  }

}
