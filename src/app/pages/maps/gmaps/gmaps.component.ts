import { Component, Output, EventEmitter } from '@angular/core';
import { NbAuthService } from '@nebular/auth';
import { HttpClient } from '@angular/common/http';
import { Apiconfig } from '../../../@core/utils';
import { Router } from '@angular/router';
import { NbMenuService } from '@nebular/theme';

@Component({
  selector: 'ngx-gmaps',
  styleUrls: ['./gmaps.component.scss'],
  template: `
    <nb-card>
      <nb-card-header style="color: white;">{{address[0].TempleName}}</nb-card-header>
      <nb-card-body>
      <div style="padding:10px">
      <span><b>Address: </b>{{address[0].address}}</span><br/>
      <span><b>Email: </b> {{address[0].contactemail}}​</span><br/>
     ​<span><b>Phone:</b>  {{address[0].contactno}}​</span><br/>
    
      </div>
        <agm-map [latitude]="lat" [longitude]="lng" [zoom]="15" >
          <agm-marker [latitude]="lat" [longitude]="lng" >
          <agm-info-window>
          <strong>{{address[0].address}}</strong>
        </agm-info-window>
          </agm-marker>
        </agm-map>
      </nb-card-body>
    </nb-card>
  `,
})
export class GmapsComponent {

   lat:number ;
   lng :number;
  @Output() positionChanged = new EventEmitter<Location>();


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
         this.lat=resp[0].lati
       this.lng=resp[0].longi
      //this.lat=24.891293;
     // this.lng=84.1783565;
        //this.setCurrentPosition(this.lat,this.lng)
      });
      
    })

  }
  
 
}
