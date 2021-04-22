import { Component, OnDestroy, OnInit } from '@angular/core';
import { NbMediaBreakpointsService, NbMenuService, NbSidebarService, NbThemeService } from '@nebular/theme';

import { UserData } from '../../../@core/data/users';
import { LayoutService, Apiconfig } from '../../../@core/utils';
import { map, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit, OnDestroy {

  private destroy$: Subject<void> = new Subject<void>();
  userPictureOnly: boolean = false;
  user: any;

  themes = [
    {
      value: 'default',
      name: 'Light',
    },
    {
      value: 'dark',
      name: 'Dark',
    },
    {
      value: 'cosmic',
      name: 'Cosmic',
    },
    {
      value: 'corporate',
      name: 'Corporate',
    },
  ];

  currentTheme = 'default';
  isrightlogo=true;
  userMenu = [ { title: 'Profile' }, { title: 'Log out' } ];

  select='&nbsp;&nbsp;&nbsp;More&nbsp;&nbsp;&nbsp;'
  menulist=[{ title: 'Facebook'},{ title: 'Twitter'},{ title: 'Google-play'},{ title: 'App Store'}]
  address: any;
  postobj:{TempleID:number,clientid:string,appid:string,roleid}={TempleID:null,clientid:'',appid:'',roleid:''}
  
  constructor(private sidebarService: NbSidebarService,
              private menuService: NbMenuService,
              private themeService: NbThemeService,
              private userService: UserData,
              private router: Router,
              private httpClient: HttpClient,public API:Apiconfig,
              private layoutService: LayoutService,
              private breakpointService: NbMediaBreakpointsService) {

                this.httpClient.get("assets/config.json").subscribe(data =>{
       
                  let jsonobj=JSON.parse(JSON.stringify(data));
                  debugger;
                  if(jsonobj.rightlogo=="false"){
                    this.isrightlogo=false
                  }
                  this.postobj.TempleID=jsonobj.templeID
                  console.log(data);
                  //this.products = data;
                  // {"templeid":105,"clientid":"CLIENTID6","appid":"DARSHANAPP","roleid":"DARSHANUSER"}
                  // {"clientid":"CLIENTID6","appid":"DARSHANAPP","userid":"1"}
            
                 this.API.callAPI('gettempleaddressdetails.php',this.postobj).subscribe((resp)=>{
                    this.address=resp[0]
            
                    console.log(JSON.stringify(resp))
                  });
                  
                })

  }

  ngOnInit() {

   


    this.currentTheme = this.themeService.currentTheme;

    this.userService.getUsers()
      .pipe(takeUntil(this.destroy$))
      .subscribe((users: any) => this.user = users.nick);

    const { xl } = this.breakpointService.getBreakpointsMap();
    this.themeService.onMediaQueryChange()
      .pipe(
        map(([, currentBreakpoint]) => currentBreakpoint.width < xl),
        takeUntil(this.destroy$),
      )
      .subscribe((isLessThanXl: boolean) => this.userPictureOnly = isLessThanXl);

    this.themeService.onThemeChange()
      .pipe(
        map(({ name }) => name),
        takeUntil(this.destroy$),
      )
      .subscribe(themeName => this.currentTheme = themeName);
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  changeTheme(themeName: string) {
    this.themeService.changeTheme(themeName);
  }

  toggleSidebar(): boolean {
    
    this.sidebarService.toggle(true, 'menu-sidebar');
    this.layoutService.changeLayoutSize();

    return false;
  }
  openpage(url){
    
    this.router.navigate([url]);
      }
  navigateHome() {
    this.menuService.navigateHome();
    return false;
  }
}
