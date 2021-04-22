import { Component, OnInit, NgModule  } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import {ModelPopupComponent } from './model-popup/model-popup.component'
import { Apiconfig } from '../../../@core/utils';
import { HttpClient } from '@angular/common/http';

@NgModule({
  imports: [
    ModelPopupComponent
  ], 
  exports: [
    ModelPopupComponent,
  ], 
  declarations: [
    ModelPopupComponent
  ]
})
@Component({
  selector: 'ngx-photo-album',
  templateUrl: './photo-album.component.html',
  styleUrls: ['./photo-album.component.scss']
})
export class PhotoAlbumComponent implements OnInit {
  servicelistobj: Object;
  postobj:{templeid:number,clientid:string,appid:string,roleid}={templeid:null,clientid:'',appid:'',roleid:''}
  public imagelocation:string;
  eventgal: Response;
  constructor(private httpClient: HttpClient,private dialogService: NbDialogService,public API:Apiconfig) {
    this.imagelocation=API.imageurl;
   }
  
  ngOnInit() {
    this.httpClient.get("assets/config.json").subscribe(data =>{
      let jsonobj=JSON.parse(JSON.stringify(data));
      this.postobj.templeid=jsonobj.templeID
      // console.log(data);
      
     this.API.callAPI('getgalleryimagebytemple.php',this.postobj).subscribe((resp)=>{
        this.servicelistobj=resp

        //console.log(JSON.stringify(resp))
      });
      this.API.callAPI('gettempleoldeventsbytempleid.php',this.postobj).subscribe((resp)=>{
        this.eventgal=resp
        //this.eventgal=JSON.parse('[{"EventsID":"50","TempleID":"105","EventsTitle":"jkhkj","EventsType":"4","EventsShortDesc":"jkhkj","EventsLongDesc":"kjkljlkjl","OBPossible":"0","OBPageName":"","OBURL":"","CreatedBy":"1","CreatedDate":"2020-01-21","modifiedby":null,"modifieddate":null,"photoalbumpagename":"Test2","photoalbumpageurl":"https:\/\/photos.app.goo.gl\/PTrsrnnBNBZSnY2a8","videoalbumpagename":"Video Album","videoalbumpageurl":"https:\/\/photos.app.goo.gl\/PTrsrnnBNBZSnY2a8"}]');
        // console.log(JSON.stringify(this.eventgal))
      });

      
    })
   
  }
  

  
 
  selectImage(imagelocation){
    this.dialogService.open(ModelPopupComponent, {
      context: {
        title: imagelocation,
        
      },
    });
  }
}
