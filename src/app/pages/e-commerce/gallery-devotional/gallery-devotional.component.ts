import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Apiconfig } from '../../../@core/utils';   ///---- YouTub apiKey and  channelid-----------

@Component({
  selector: 'ngx-gallery-devotional',
  templateUrl: './gallery-devotional.component.html',
  styleUrls: ['./gallery-devotional.component.scss']
})
export class GalleryDevotionalComponent implements OnInit {
  videos: any[]=[];

  postobj:{templeid:number,TempleID:number,clientid:string,appid:string,roleid}={templeid:null,TempleID:null,clientid:'',appid:'',roleid:''}
  eventlistobj: Response;
  templeDetail: Response;
  mediaFileList: Response;
  
  
  constructor(public http: HttpClient,public API:Apiconfig ,private httpClient: HttpClient) { }

  // getVideosForChanel(channel, maxResults): Observable<Object> {
   
  // }

  ngOnInit() {
 


    this.httpClient.get("assets/config.json").subscribe(data =>{
    
      let jsonobj=JSON.parse(JSON.stringify(data));
      this.postobj.templeid=jsonobj.templeID
      this.postobj.TempleID=jsonobj.templeID
      this.postobj.clientid=jsonobj.CLIENTID
      this.postobj.appid=jsonobj.APPID
      this.postobj.roleid=jsonobj.ROLE_ID
      // console.log(data);
      //this.products = data;
      this.API.callAPI('gettempleaddressdetails.php',this.postobj).subscribe((resp)=>{
        this.templeDetail=resp
        //
        this.API.youtubecallAPI(this.templeDetail['0'].youtube_channel_id, 50).subscribe(lista=>{
          for (let element of lista["items"]) {
            this.videos.push(element)
            }
        });
      });
     this.API.callAPI('listfiles.php',this.postobj).subscribe((resp)=>{
        this.eventlistobj=resp

        // console.log(JSON.stringify(resp))
      });
      this.API.callAPI('getMediaFileList.php',this.postobj).subscribe((resp)=>{
        this.mediaFileList=resp

        // console.log(JSON.stringify(resp))
      });
    })
    

    //UC-54-5MmhBjF_iA6CgIHR-A/
    //UCABo8GKoFC2YqW_OkUiYl1Q
    


   
    // this.videos=[{"kind":"youtube#searchResult","etag":"\"SJZWTG6xR0eGuCOh2bX6w3s4F94/lYGkRXYP2Nxi2Nn00cm-M8kMZ6g\"","id":{"kind":"youtube#video","videoId":"GOtOFHNj9mQ"},"snippet":{"publishedAt":"2019-06-26T07:18:12.000Z","channelId":"UCzRP9zTD6aMck6dKdB1a3ZA","title":"how to create login app in ruby on rails","description":"A tutorial to create a simple authentication for your Rails 5.2 application when gems like Devise are too big or too complicated to customize.","thumbnails":{"default":{"url":"https://i.ytimg.com/vi/GOtOFHNj9mQ/default.jpg","width":120,"height":90},"medium":{"url":"https://i.ytimg.com/vi/GOtOFHNj9mQ/mqdefault.jpg","width":320,"height":180},"high":{"url":"https://i.ytimg.com/vi/GOtOFHNj9mQ/hqdefault.jpg","width":480,"height":360}},"channelTitle":"Pratap Nirala","liveBroadcastContent":"none"}},{"kind":"youtube#searchResult","etag":"\"SJZWTG6xR0eGuCOh2bX6w3s4F94/Ql6YB6CkZ-4sPI8zD2raTCdE3LU\"","id":{"kind":"youtube#video","videoId":"DnAh5ONj-6A"},"snippet":{"publishedAt":"2019-06-17T17:15:52.000Z","channelId":"UCzRP9zTD6aMck6dKdB1a3ZA","title":"how to create ruby on rails project","description":"This Ruby on Rails tutorial will help people new to the framework understand how it operates as well as the necessary conventions required to create a blog ...","thumbnails":{"default":{"url":"https://i.ytimg.com/vi/DnAh5ONj-6A/default.jpg","width":120,"height":90},"medium":{"url":"https://i.ytimg.com/vi/DnAh5ONj-6A/mqdefault.jpg","width":320,"height":180},"high":{"url":"https://i.ytimg.com/vi/DnAh5ONj-6A/hqdefault.jpg","width":480,"height":360}},"channelTitle":"Pratap Nirala","liveBroadcastContent":"none"}},{"kind":"youtube#searchResult","etag":"\"SJZWTG6xR0eGuCOh2bX6w3s4F94/I0Og_3I9Eezbll3VjUVwiyI9vss\"","id":{"kind":"youtube#video","videoId":"cN3mqQKCDwg"},"snippet":{"publishedAt":"2018-03-24T19:54:00.000Z","channelId":"UCzRP9zTD6aMck6dKdB1a3ZA","title":"Deploying an Angular 7 App","description":"How to create a build in angular 7 project and deploy on server. For the simplest deployment, create a production build and copy the output directory ...","thumbnails":{"default":{"url":"https://i.ytimg.com/vi/cN3mqQKCDwg/default.jpg","width":120,"height":90},"medium":{"url":"https://i.ytimg.com/vi/cN3mqQKCDwg/mqdefault.jpg","width":320,"height":180},"high":{"url":"https://i.ytimg.com/vi/cN3mqQKCDwg/hqdefault.jpg","width":480,"height":360}},"channelTitle":"Pratap Nirala","liveBroadcastContent":"none"}}]
   
  }

}
