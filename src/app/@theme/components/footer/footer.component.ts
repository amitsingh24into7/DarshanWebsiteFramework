import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NbDialogService } from '@nebular/theme';
import { NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { CookiesModelComponent } from '../../../pages/e-commerce/cookies-model/cookies-model.component';

    // <span >Created with ♥ by <b><a href="https://w2w.com" target="_blank">W2W</a></b> 2020</span>
    
      
  
    // <a href="#" target="_blank" class="ion"><img style="width:70%" src="assets/images/appstore.png"/></a>
    // <a href="#" target="_blank" class="ion"><img style="width:70%" src="assets/images/google_play.png"/></a>
    //   <a href="#" target="_blank" class="ion ion-social-github"></a>
    //   <a href="#" target="_blank" class="ion ion-social-facebook"></a>
    //   <a href="#" target="_blank" class="ion ion-social-twitter"></a>
    //   <a href="#" target="_blank" class="ion ion-social-linkedin"></a>
   
    // <span class="created-by"><b><a style="cursor: pointer;" (click)="openpage('/pages/e-commerce/feedback')"  >Feedback</a></b></span>
@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
  <span class="created-by" style="text-align: end !important; width: 100%;">&nbsp;&nbsp;Created with ♥ by <b><a href="https://w2w.com" target="_blank">W2W</a></b> 2020</span>
  
  <!--<div class="socials">
  <a href="#" target="_blank" class="ion ion-social-facebook"></a>
    <a href="#" target="_blank" class="ion ion-social-twitter"></a>
  <a href="#" target="_blank" class="ion"><img style="width:70%" src="assets/images/appstore.png"/></a>
    <a href="#" target="_blank" class="ion"><img style="width:70%" src="assets/images/google_play.png"/></a>
   
    
  
  </div>-->
  `,
})
export class FooterComponent {

  names: string[] = [];
  constructor(private router: Router,private dialogService: NbDialogService) {
    this.opencookiesModel();

  }
  openpage(url){
    
this.router.navigate([url]);
  }
  opencookiesModel(){
    let isCookie_Policy=localStorage.getItem('isCookie_Policy');
    debugger;
    let ngbModalOptions: NgbModalOptions = {
     
      keyboard: false,
      backdrop: false,
     
};
    // if(isCookie_Policy!='confirm'){
    this.dialogService.open(CookiesModelComponent,ngbModalOptions)
      .onClose.subscribe(name => name && this.names.push(name));}
      
  //}
}
