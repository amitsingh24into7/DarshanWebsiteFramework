import { Component, OnInit } from '@angular/core';


import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Apiconfig } from '../../../@core/utils';

import { NbToastrService } from '@nebular/theme';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {
  feedbackForm: FormGroup;
  submitted = false;
  
  postobj:{templeid:number,clientid:string,appid:string,roleid,userid:string ,email:string,feedbackmsg:string ,name:string}={templeid:null,clientid:'',appid:'',roleid:'', userid:'',email:'',feedbackmsg:'',name:''}
  
  constructor(private toastrService: NbToastrService,private formBuilder: FormBuilder,private httpClient: HttpClient,public API:Apiconfig,private router: Router) { }

  ngOnInit() {
    this.httpClient.get("assets/config.json").subscribe(data =>{
      let userinfo=JSON.parse(localStorage.getItem('APIlogininfo'));
      let jsonobj=JSON.parse(JSON.stringify(data));
      this.postobj.templeid=jsonobj.templeID
      this.postobj.clientid=jsonobj.CLIENTID
      this.postobj.roleid=jsonobj.ROLE_ID
      this.postobj.appid=jsonobj.APPID
      this.postobj.userid=userinfo.user.ID;
      //console.log(userinfo.user.ID);
      // this.postobj.templeid=jsonobj.templeID
      // this.postobj.roleid=jsonobj.ROLE_ID
      // this.postobj.appid=jsonobj.APPID
      // this.postobj.clientid=jsonobj.CLIENTID
      
      // console.log(data);
      //this.products = data;

     
      
    })
    this.feedbackForm = this.formBuilder.group({
      inputName: ['', Validators.required],
     
      inputEmail: ['', Validators.required],
       inputdesc: ['', Validators.required],
      
     
  });
  }


  get f() { return this.feedbackForm.controls; }
  onSubmit() {
   debugger;
      this.submitted = true;

      // stop here if form is invalid
      if (this.feedbackForm.invalid) {
          return;
      }
        let formobj=JSON.parse(JSON.stringify(this.feedbackForm.value));
    //     // console.log(JSON.stringify(formobj))
    //  alert(JSON.stringify(formobj));
     this.postobj.name=formobj.inputName
     this.postobj.email=formobj.inputEmail
     this.postobj.feedbackmsg=formobj.inputdesc
     this.API.callAPI('FeedbackForm.php',this.postobj).subscribe((resp)=>{
      //this.eventlistobj=resp
      formobj.inputName=''
      formobj.inputEmail=''
      formobj.inputdesc=''
      this.router.navigate(['pages/dashboard']);
      this.showToast('top-right',resp,'basic')
      // console.log(JSON.stringify(resp))
    });
    }
    showToast(position,resp,status) {
      let duration=5000;
      
      this.toastrService.show(
        resp.status,
        resp.message,
        { position,duration});
    }


}
