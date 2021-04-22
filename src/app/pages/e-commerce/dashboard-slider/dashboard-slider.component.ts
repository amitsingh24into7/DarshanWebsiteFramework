import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Apiconfig } from '../../../@core/utils';
@Component({
  selector: 'ngx-dashboard-slider',
  templateUrl: './dashboard-slider.component.html',
  styleUrls: ['./dashboard-slider.component.scss']
})
export class DashboardSliderComponent implements OnInit {

  sliderlistobj: any;
  postobj:{templeid:number,clientid:string,appid:string,roleid}={templeid:null,clientid:'',appid:'',roleid:''}
  imageurl: string;
 
  constructor(private router: Router, private httpClient: HttpClient,public API:Apiconfig) {
    this.imageurl=API.imageurl
   }

  ngOnInit() {
    //this.sliderlistobj=[{image:'darshanapp/uploadFiles/16.jpeg',title:'werwer',description:'232323@sdfs'}];
    
   
    this.httpClient.get("assets/config.json").subscribe(data =>{
    
      let jsonobj=JSON.parse(JSON.stringify(data));
      this.postobj.templeid=jsonobj.templeID
      // console.log(data);
      //this.products = data;

     this.API.callAPI('geteventsbanner.php',this.postobj).subscribe((resp)=>{
        this.sliderlistobj=resp

        // console.log(JSON.stringify(resp))
      });
      
    })
  }
  openDetailFunction(item){
    this.router.navigate(['pages/e-commerce/cultural'], { state: { eventdata: item,fromindex:'pages/dashboard' } });
   
 

  }
}
