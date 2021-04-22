import { Component, OnInit } from '@angular/core';


import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Apiconfig } from '../../../@core/utils';
import { NbToastrService } from '@nebular/theme';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-volunteering',
  templateUrl: './volunteering.component.html',
  styleUrls: ['./volunteering.component.scss']
})
export class VolunteeringComponent implements OnInit {
  
  volunteeringForm: FormGroup;
  submitted = false;
  postobj:{templeid:number,clientid:string,appid:string,roleid:string}={templeid:null,clientid:'',appid:'',roleid:''}
  eventlistobj: Response;
  naveprmobj: any;
  isback: boolean=false;
  voluntlistobj: Response;
  constructor(private toastrService: NbToastrService,private router: Router,private formBuilder: FormBuilder,public API:Apiconfig, private httpClient: HttpClient) { }

  ngOnInit() {
    
    if(window.history.state.fromindex){
      this.isback=true
    }
    let istempuser=JSON.parse(localStorage.getItem('APIlogininfo'))
    // console.log(istempuser);
    this.naveprmobj=window.history.state.eventdata;
    this.httpClient.get("assets/config.json").subscribe(data =>{
      let jsonobj=JSON.parse(JSON.stringify(data));
      this.postobj.templeid=jsonobj.templeID
      this.postobj.appid=jsonobj.APPID
      this.postobj.clientid=jsonobj.CLIENTID
      this.postobj.roleid=jsonobj.ROLE_ID
      // TempleID: 105, clientid: "CLIENTID6", appid: "DARSHANAPP", roleid: "DARSHANUSER"
      this.API.callAPI('gettempleeventsbyadmin.php',this.postobj).subscribe((resp)=>{
        this.eventlistobj=resp

        console.log(JSON.stringify(resp))
      
      });
    })

    let usernameobj=istempuser.user.UserName.split(" ");
    this.volunteeringForm = this.formBuilder.group({
      inputfName: [usernameobj[0], Validators.required],
      inputlName: [usernameobj[1], Validators.required],
      inputEmail1: [istempuser.user.UserID, Validators.required],
      inputC_code:['', Validators.required],
      inputContact:['', Validators.required],
      inputfEvent:['',Validators.required]
     
  });
  this.getlistOfvol();
  }

  get f() { return this.volunteeringForm.controls; }
  onSubmit() {
   debugger;
      this.submitted = true;

      // stop here if form is invalid
      if (this.volunteeringForm.invalid) {
          return;
      }

      this.httpClient.get("assets/config.json").subscribe(data =>{
         let jsonobj=JSON.parse(JSON.stringify(data));
        // this.postobj.templeid=jsonobj.templeID

// inputfName: "jdksfhsjkdf"
// inputlName: "sdfsdfsd"
// inputEmail1: "yutuytyu@iuoiu.iuyo"
// inputC_code: "1"
// inputContact: "2323232323"
// inputfEvent: "32"
let tempuser=JSON.parse(localStorage.getItem('APIlogininfo'))
let formobj=JSON.parse(JSON.stringify(this.volunteeringForm.value));
        let formpostobj:{f_Name:String,l_Name:String,Email:String,C_code:String,mobile:String,EventID:string, userID:String ,templeID:string }={f_Name:formobj.inputfName,l_Name:formobj.inputlName,Email:formobj.inputEmail1,C_code:formobj.inputC_code,mobile:formobj.inputContact,EventID:formobj.inputfEvent,userID:tempuser.user.ID,templeID:jsonobj.templeID}
       
        this.API.callAPI('insertVolunteering.php',formpostobj).subscribe((resp)=>{
          this.eventlistobj=resp
          //this.router.navigate(['pages/dashboard']);
          this.volunteeringForm.controls['inputfEvent'].reset();
          this.volunteeringForm.controls['inputC_code'].reset();
          this.volunteeringForm.controls['inputContact'].reset()
          this.showToast('top-right',resp,'basic')
          console.log(JSON.stringify(resp))
        
        });
      })
      this.getlistOfvol();
    }

    showToast(position,resp,status) {
      let duration=5000;
     
      this.toastrService.show(
        resp.status,
        resp.message,
        {duration});
    }


    backfunction(){
     
      this.router.navigate([window.history.state.fromindex]);
    }

    getlistOfvol(){

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
