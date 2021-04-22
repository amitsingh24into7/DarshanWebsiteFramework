import { Component, OnInit } from '@angular/core';
import { Apiconfig } from '../../../@core/utils/apiconfig.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-addfamilymember',
  templateUrl: './addfamilymember.component.html',
  styleUrls: ['./addfamilymember.component.scss']
})
export class AddfamilymemberComponent implements OnInit {
  donationdataobj: any;
  userProfiletemp: any;
  userid: any;
  flipped: boolean;
  selectedgender='';
  selectednametitle=''
  selectedrelation=''
  userProfile:{relation:string,nametitle:string,UserName:string,EmailAddress:string,ContactNumber:string,nakshtra:string,rashi: string,gotra:string,birthdate:string,marriagedate:string,gender:string,deathdate:string,famID:string}={relation:'',nametitle:'',UserName:'',EmailAddress:'',ContactNumber:'',nakshtra:'',rashi: '',gotra:'',birthdate:'',marriagedate:'',gender:'',deathdate:'',famID:''};
  nametitle: any;
  relationobj: Response;
  isupdate=false;
  constructor(public API:Apiconfig,private router: Router) { 
   
    this.userProfiletemp=JSON.parse(localStorage.getItem('APIlogininfo'));
    this.userid=this.userProfiletemp.user.ID
  }
 
  ngOnInit() {
   
    this.API.callAPI('getconfigdata.php',{configtype:"RELATIONSHIPTYPE"}).subscribe((resp)=>{
      this.relationobj=resp
    })
    this.API.callAPI('getconfigdata.php',{configtype:"NAMETITLE"}).subscribe((resp)=>{
      this.nametitle=resp
      this.donationdataobj=window.history.state.familyobj
      if(this.donationdataobj){
        this.isupdate=true;
        this.selectedgender=this.donationdataobj.gender
        this.selectednametitle=this.donationdataobj.nametitle
        this.selectedrelation=this.donationdataobj.realtionship
        this.userProfile.famID=this.donationdataobj.id
        this.userProfile.UserName=this.donationdataobj.name
        this.userProfile.relation=this.donationdataobj.realtionship
        this.userProfile.nametitle=this.donationdataobj.nametitle
        this.userProfile.gender=this.donationdataobj.gender
        this.userProfile.EmailAddress=this.donationdataobj.email
        this.userProfile.ContactNumber=this.donationdataobj.mobile
        this.userProfile.nakshtra=this.donationdataobj.nakshatra
        this.userProfile.gotra=this.donationdataobj.gotra
        this.userProfile.rashi=this.donationdataobj.rashi
        this.userProfile.birthdate=this.donationdataobj.birthdate
        this.userProfile.marriagedate=this.donationdataobj.marriagedate
        this.userProfile.deathdate=this.donationdataobj.deathdate
      }
    })
    
  }
  toggleView(){
    //this.flipped = !this.flipped;
    this.router.navigate(['pages/e-commerce/profile'], { state: { donationobj:'' } });
  }
  onSubmit(profileEditForm){
debugger;
 let formobj=profileEditForm.value;
    //     // console.log(JSON.stringify(formobj))
   // alert(JSON.stringify(formobj));
    let updateprofile:{userid,gender,nametitle,relation,phone,username,email,nakshatra,rashi,gotra,birthdate,marriagedate,deathdate,famID}={
      userid:this.userid,
      gender:formobj.gender,
      nametitle:formobj.nametitle,
      relation:formobj.relation,
      phone:formobj.inputPhone,
      username:formobj.inputName,
      email:formobj.inputEmail,
      nakshatra:formobj.inputnakshtra,
      rashi:formobj.inputnakshtra1,
      gotra:formobj.inputnakshtra2,
      birthdate:formobj.inputBirth,
      marriagedate:formobj.inputMarrage,
      deathdate:formobj.deathdate,
      famID: this.userProfile.famID
    }
    //alert(JSON.stringify(updateprofile));
   
    if( this.isupdate){
      this.API.callAPI('updateFamilyDetail.php',updateprofile).subscribe((resp)=>{
        this.router.navigate(['pages/e-commerce/profile'], { state: { donationobj:'' } });
      })
    }else{
      this.API.callAPI('insertMyfamily.php',updateprofile).subscribe((resp)=>{
        this.router.navigate(['pages/e-commerce/profile'], { state: { donationobj:'' } });
      })
    }
   
  }

}
