import { Component, OnInit } from '@angular/core';
import { SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider,
  FacebookLoginProvider, 
  AuthService} from 'angularx-social-login';
import { HttpClient } from '@angular/common/http';
import { NbDialogService, NbToastrService } from '@nebular/theme';
import { Apiconfig } from '../../../@core/utils';
import { ActivatedRoute, Router } from '@angular/router';


import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
islogin=false;
 
postobjConnected​:{templeid:number,clientid:string,appid:string,roleid ,email:string,privacypolicy:string,countryCode:string,mobile:string}={templeid:null,clientid:'',appid:'',roleid:'',email:'',privacypolicy:'',countryCode:'',mobile:''}

  postobj:{
    userid:string, 
    username:string, 
    phone:string,
    password:string,
    email:string,
    templeid:number,
    facebookid:string,
    clientid:string,
    gmailID:string,
    DeviceID:string,
    authtoken:string,
    provider:string
    appid:string,
    Profileimage:string,
    roleid:string}={userid:null, 
      username:'', 
      phone:'',
      password:'',
      email:'',
      templeid:null,
      facebookid:'',
      clientid:'',
      gmailID:'',
      DeviceID:'',
      authtoken:'',
      provider:'',
      appid:'',
      Profileimage:'',
      roleid:''}

      stayConnectedForm: FormGroup;
      submitted = false;

  constructor(private toastrService: NbToastrService, private formBuilder: FormBuilder,private socialAuthService: AuthService,private httpClient: HttpClient,private dialogService: NbDialogService,public API:Apiconfig,private route: ActivatedRoute,private router: Router) { 
    this.islogin=this.API.isLogin;
    //console.log(window.history.state.Donationdata);
  }
  
  socialSignIn(socialPlatform : string) {
    debugger;
    let socialPlatformProvider;
    if(socialPlatform == "facebook"){
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    }else if(socialPlatform == "google"){
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    } 
    
    this.socialAuthService.signIn(socialPlatformProvider).then(
      (user) => {  
        let userobj=user    	
        // console.log(socialPlatform+" sign in data : " , user);
        localStorage.setItem('logininfo',JSON.stringify(user));
        this.postobj.gmailID=user.id
        //this.postobj.facebookid=user.
        this.postobj.authtoken=user.authToken
        this.postobj.email=user.email
        this.postobj.provider='Google'
        this.postobj.username=user.name
        this.postobj.userid=user.email
        

        this.API.callAPI('insertuser.php',this.postobj).subscribe((resp)=>{
          //this.servicelistobj=resp
          
          let loginobj:{userid:string,password:string,provider:string,DeviceID:string}={
            userid:'',password:'',provider:'',DeviceID:''
          }
          loginobj.userid=user.email
          loginobj.provider='Google'
          //console.log(JSON.stringify(resp))
          this.API.callAPI('getuserdetails.php',loginobj).subscribe((resp)=>{
            //this.servicelistobj=resp
            localStorage.setItem('APIlogininfo',JSON.stringify(resp));
            // console.log(JSON.stringify(resp))
            if(window.history.state.Donationdata){
              this.router.navigate(['pages/e-commerce/DonationForm'],{ state: { data: window.history.state.Donationdata} });
            }else if(window.history.state.eventdata){
              this.router.navigate(['pages/e-commerce/volunteering'],{ state: { eventdata: window.history.state.eventdata,fromindex:window.history.state.fromindex} });
          
          }else if(window.history.state.c_eventdata){
            this.router.navigate(['pages/e-commerce/volunteering'],{ state: { eventdata: window.history.state.c_eventdata,fromindex:window.history.state.fromindex} });
        
        }else{
              this.router.navigate(['pages/dashboard']);
            }
            this.API.isLogin=true;
            this.islogin=true;
          });
        });
            
      },err => {
        // console.log('error');
     }
      
    );
  }

  get f() { return this.stayConnectedForm.controls; }
  onSubmitform() {
   debugger;
  //  alert();
      this.submitted = true;

      // stop here if form is invalid
      if (this.stayConnectedForm.invalid) {
          return;
      }

      
    let formobj=JSON.parse(JSON.stringify(this.stayConnectedForm.value));
        // console.log(formobj)
     this.postobjConnected.email=formobj.inputemail
      this.postobjConnected.privacypolicy=formobj.policy
      this.postobjConnected.countryCode=formobj.inputc_code
      this.postobjConnected.mobile=formobj.inputPhone
        this.API.callAPI('StayConnected​Form.php',this.postobjConnected).subscribe((resp)=>{
          //this.eventlistobj=resp
         
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
        { position,duration ,status  });
    }
  ngOnInit() {
    this.stayConnectedForm = this.formBuilder.group({
      inputPhone: ['', Validators.required],
     
      inputemail: ['', Validators.required],
      inputc_code: ['', Validators.required],
      policy: ['', Validators.required],
      
     
  });
    this.httpClient.get("assets/config.json").subscribe(data =>{
      let jsonobj=JSON.parse(JSON.stringify(data));
      this.postobj.templeid=jsonobj.templeID
      this.postobj.roleid=jsonobj.ROLE_ID
      this.postobj.appid=jsonobj.APPID
      this.postobj.clientid=jsonobj.CLIENTID
     
      // console.log(data);
      let userinfo=JSON.parse(localStorage.getItem('APIlogininfo'));
      //let postobjConnected​=JSON.parse(JSON.stringify(data));
      this.postobjConnected​.templeid=jsonobj.templeID
      this.postobjConnected​.clientid=jsonobj.CLIENTID
      this.postobjConnected​.roleid=jsonobj.ROLE_ID
      this.postobjConnected​.appid=jsonobj.APPID
      //this.postobjConnected​.userid=userinfo.user.ID;
      
    })
  }

}
