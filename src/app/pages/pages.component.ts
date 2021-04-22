import { Component } from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import { SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider,
  FacebookLoginProvider, 
  AuthService} from 'angularx-social-login';
import { MENU_ITEMS } from './pages-menu';
import { NbSidebarService, NbMenuService, NbThemeService, NbMediaBreakpointsService } from '@nebular/theme';
import { LayoutService ,Apiconfig} from '../@core/utils';
import { Router } from '@angular/router';

  //-------------Use for MENU api call--------------//
//import { HttpClient } from '@angular/common/http';
//import {Apiconfig} from '../@core/utils/apiconfig.service'
// @Component({
//   selector: 'ngx-pages',
//   styleUrls: ['pages.component.scss'],
//   template: `
//     <ngx-one-column-layout>
//        <nb-menu autoCollapse="true" (click)="toggleSidebar()"  [items]="menu;"></nb-menu>
//      <router-outlet></router-outlet>
//     </ngx-one-column-layout>
//   `,
// })


@Component({
  selector: 'ngx-pages',
  styleUrls: ['pages.component.scss'],
  template: `
    <ngx-one-column-layout>
       <nb-menu autoCollapse="true" (click)="toggleSidebar()"  [items]="getMenu()"></nb-menu>
     <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `,
})
export class PagesComponent {
isrisponcive=false
  constructor(private sidebarService: NbSidebarService,
    public menuService: NbMenuService,
    public API:Apiconfig,
    private socialAuthService: AuthService,
    private themeService: NbThemeService,
    public breakpointObserver: BreakpointObserver,
    private layoutService: LayoutService,
    private router: Router,
    private breakpointService: NbMediaBreakpointsService) {



      
      menuService.onItemClick().subscribe((resp) => {
        debugger;
        if(resp.item.title=="LogOut"){
          this.socialAuthService.signOut()
              localStorage.removeItem('APIlogininfo');
              localStorage.removeItem('logininfo');
              this.API.isLogin=false;
              this.router.navigate(['pages/dashboard']);
          
        }
        // console.log(resp);
      });
      breakpointObserver.observe([
        Breakpoints.HandsetLandscape,
        Breakpoints.HandsetPortrait
      ]).subscribe(result => {
        if (result.matches) {
          //this.activateHandsetLayout();
          this.isrisponcive=true
        }
      });
      
}
getMenu() {
  return this.menuVisibility(MENU_ITEMS, ['User Activities','Volunteering','Volunteering Detail','LogOut','My Donation','My Profile']);
  //  this.menuVisibility(MENU_ITEMS, 'My Profile', this.isAdmin('My Profile'));
  //   this.menuVisibility(MENU_ITEMS, 'LogOut', this.isAdmin('LogOut'));
  //  this.menuVisibility(MENU_ITEMS, 'My Donation', this.isAdmin('My Donation'));
  
}



menuVisibility(menu, title) {
  let newmenu = menu;
  let visible=false ;
  for (let i = 0; i < title.length; i++) {
    //const element = array[index];
    if(title[i]=='User Activities'){
      if(this.API.isLogin && title[i]=='User Activities'){
      visible=false;
    }else {
      visible=true
      //continue; 
    }
    }else{
      
      if((this.API.isLogin && title[i]=='LogOut' )|| (this.API.isLogin && title[i]=='My Profile')|| (this.API.isLogin && title[i]=='My Donation')|| (this.API.isLogin && title[i]=='Volunteering')|| (this.API.isLogin && title[i]=='Volunteering Detail') ){
        visible= true;
      }else{
        visible= false;
      }
    }
    

    

    let index = menu.findIndex(v => v.title == title[i]);
  let menu_filter = menu.filter(v => v.title == title[i]);
  if ((menu_filter.length > 0) && (index >= 0)) {
    menu_filter[0].hidden = !visible;
    newmenu = [
      ...menu.slice(0, index),
      menu_filter[0],
      ...menu.slice(index + 1),
    ]
  }
  }
  
  return newmenu;
}
  //-------------Use for MENU api call--------------//
 //menu:any[]=[];
//  tempobj:any[]=[]
// postobj:{templeid:number,clientid:string,appid:string,roleid}={templeid:null,clientid:'',appid:'',roleid:''}
// constructor(private httpClient: HttpClient,public API:Apiconfig) { 
//   this.httpClient.get("assets/config.json").subscribe(data =>{
    
//     let jsonobj=JSON.parse(JSON.stringify(data));
//     this.postobj.templeid=jsonobj.templeID
//     // console.log(data);
   
//    this.API.callAPI('getmenuforuser.php',this.postobj).subscribe(resp=>{
     
    
//     let tempmenuobj=JSON.parse(JSON.stringify(resp))
//   debugger;
//   for (this.tempobj of tempmenuobj) {
   
//     let filterobj: {
//       title: string,
//       icon: string,
//       link: string,     
//     }={
//       title: this.tempobj['MenuName'],
//       icon: this.tempobj['MenuImage'],
//       link: '',    
//     }
//     if(this.tempobj['menuid']=='5'){
//       filterobj.link='/pages/dashboard';
//     }else if(this.tempobj['menuid']=='2'){
//       filterobj.link='/pages/ui-features/search-fields'
//     }else if(this.tempobj['menuid']=='7'){
//       filterobj.link='/pages/e-commerce/faq'
//     }else if(this.tempobj['menuid']=='6'){
//       filterobj.link='/pages/e-commerce/about-us'
//     }else if(this.tempobj['menuid']=='12'){
//       filterobj.link='/pages/maps/gmaps'
//     }

   
//     else{

//     }
//     this.menu.push(filterobj)
//   }
    
 
//       // console.log(JSON.stringify(resp))
//     });
    
//   })
// }
toggleSidebar(): boolean {
 debugger
  //this.sidebarService.toggle(true, 'menu-sidebar');
  //this.layoutService.changeLayoutSize();
    this.breakpointObserver.observe([
      Breakpoints.HandsetLandscape,
      Breakpoints.HandsetPortrait
    ]).subscribe(result => {
      if (result.matches) {
        this.sidebarService.toggle(true, 'menu-sidebar');
        this.layoutService.changeLayoutSize();

        //this.isrisponcive=true
      }
    });
  
    if(this.isrisponcive){
     
     }

   return false;
}
  menu = MENU_ITEMS;

}
