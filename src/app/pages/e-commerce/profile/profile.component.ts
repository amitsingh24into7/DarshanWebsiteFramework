import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Apiconfig } from '../../../@core/utils/apiconfig.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  updateProfileForm: FormGroup;
  flipped: boolean;
  Familyflipped: boolean;
  userinfo:{name:string,email:string,userid:string}={name:'', email:'',userid:''};
  userProfile:any;
  familyListObj:any;
  famliydetail: any;
  userProfiletemp: any;
  constructor(private formBuilder: FormBuilder,public API:Apiconfig,private router: Router) { 
    //this.donationdataobj=window.history.state.donationobj
    this.userProfiletemp=JSON.parse(localStorage.getItem('APIlogininfo'));
    let u_Profile=this.userProfiletemp.user
     this.userinfo.name=u_Profile.UserName;
     this.userinfo.email=u_Profile.EmailAddress
     debugger;
     this.userinfo.userid=u_Profile.ID
    debugger;
    this.API.callAPI('getUserProfile.php',{userid:this.userinfo.userid}).subscribe((resp)=>{
      let respobj:any=resp;
     this.userProfile=respobj.user
  //    this.updateProfileForm = this.formBuilder.group({
  //     inputName: [this.userProfile.UserName, Validators.required],
  //     inputEmail: [this.userProfile.EmailAddress, Validators.required],
  //     inputPhone: [this.userProfile.ContactNumber, Validators.required],
  //     inputnakshtra: [this.userProfile.nakshtra, Validators.required],
  //     inputnakshtra1: [this.userProfile.rashi, Validators.required],
     
  //    inputnakshtra2: [this.userProfile.gotra, Validators.required],
  //    inputBirth: [this.userProfile.birthdate, Validators.required],
  //     inputMarrage: [this.userProfile.marriagedate, Validators.required]
      
  // });
     // console.log(JSON.stringify(resp))
   });
    // if(this.userProfile.marriagedate=='"0000-00-00"'){
    //   this.userProfile.marriagedate=''
    // }
    // if(this.userProfile.birthdate=='"0000-00-00"'){
    //   this.userProfile.birthdate=''
    // }
  }

  ngOnInit() {
    
    //let tempinfo=JSON.parse(localStorage.getItem('logininfo'));
    
    
    //  this.API.callAPI('getUserProfile.php',{userid:this.userinfo.userid}).subscribe((resp)=>{
    //    let respobj:any=resp;
    //   this.userProfile=respobj.user
    //   // console.log(JSON.stringify(resp))
    // });
    debugger;
     this.API.callAPI('getMyFamily.php',this.userinfo).subscribe((resp)=>{
      this.familyListObj=resp

      // console.log(JSON.stringify(resp))
    });

   
  }
  toggleView(userProfile:any) {
   
    this.flipped = !this.flipped;

    
  
  }
  get f() { return this.updateProfileForm.controls; }
  onSubmit(documentEditForm) {
   
    // if (this.updateProfileForm.invalid) {
    //   return;
     
    // }
    //alert(JSON.stringify(documentEditForm))
    let formobj=documentEditForm.value;
    //     // console.log(JSON.stringify(formobj))
   // alert(JSON.stringify(formobj));
    let updateprofile:{userid,phone,username,email,nakshatra,rashi,gotra,birthdate,marriagedate}={
      userid:this.userinfo.userid,
      phone:formobj.inputPhone,
      username:formobj.inputName,
      email:formobj.inputEmail,
      nakshatra:formobj.inputnakshtra,
      rashi:formobj.inputnakshtra1,
      gotra:formobj.inputnakshtra2,
      birthdate:formobj.inputBirth,
      marriagedate:formobj.inputMarrage,
    }
    debugger;
    this.API.callAPI('updateuser.php',updateprofile).subscribe((resp)=>{
     
      if(status="success"){
      
       this.API.callAPI('getUserProfile.php',{userid:this.userinfo.userid}).subscribe((resuserpval)=>{
        let userrespobj:any=resuserpval
         this.userProfile=userrespobj.user
      
      this.toggleView('')
      });
      }
   
    });
    
 //alert(JSON.stringify(updateprofile));
  }
  toggleViewfamliy(item:any){
    this.famliydetail=item
    debugger;
    this.Familyflipped = !this.Familyflipped;
  }
  openModule(){
    this.router.navigate(['pages/e-commerce/Addfamilymember']);
  }
  callEditFunction(userobj){
    this.router.navigate(['pages/e-commerce/Addfamilymember'], { state: { familyobj:userobj } });
  }

}
