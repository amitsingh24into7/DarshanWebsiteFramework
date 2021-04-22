import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';
import {FaqComponent } from './e-commerce/faq/faq.component'
import {AboutUsComponent } from './e-commerce/about-us/about-us.component'
import {PoojaItemsComponent } from './e-commerce/pooja-items/pooja-items.component'
import {PhotoAlbumComponent } from './e-commerce/photo-album/photo-album.component'
import { SponsorshipListComponent } from "./e-commerce/sponsorship-list/sponsorship-list.component";
import {AnnouncementsComponent } from './e-commerce/announcements/announcements.component'
import {TempleTimingsComponent } from './e-commerce/temple-timings/temple-timings.component'
import { FeedbackComponent } from './e-commerce/feedback/feedback.component'
import {ContactUsComponent } from './e-commerce/contact-us/contact-us.component'
import {DonationModelpageComponent } from './e-commerce/donation-modelpage/donation-modelpage.component'
import {LoginComponent} from './e-commerce/login/login.component'
import { DonationFormComponent } from './e-commerce/donation-form/donation-form.component';
import { DonationListComponent } from './e-commerce/donation-list/donation-list.component';
import { ServiceListComponent} from './e-commerce/service-list/service-list.component'
import { GalleryDevotionalComponent } from './e-commerce/gallery-devotional/gallery-devotional.component';
import { CultActivComponent } from './e-commerce/cult-activ/cult-activ.component';
import{TeamComponent} from './e-commerce/team/team.component';
import{VolunteeringComponent} from './e-commerce/volunteering/volunteering.component';

import{LunarCalendarDetailsComponent} from './e-commerce/lunar-calendar-details/lunar-calendar-details.component'
import { ProfileComponent } from './e-commerce/profile/profile.component';
import { MydonationDetailComponent } from './e-commerce/mydonation-detail/mydonation-detail.component';
import { VolunteeringListComponent } from './e-commerce/volunteering-list/volunteering-list.component';
import { AddfamilymemberComponent } from './e-commerce/addfamilymember/addfamilymember.component';
const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'dashboard',
      component: ECommerceComponent,
    },
    {
      path: 'e-commerce/feedback',
      component: FeedbackComponent,
    },
    {
      path: 'e-commerce/MydonationDetail',
      component:MydonationDetailComponent
    }
    ,{
      path:'e-commerce/service-list',
      component: ServiceListComponent
    },{
      path:'e-commerce/devotional-gallery',
      component:GalleryDevotionalComponent,
    },{
      path:'e-commerce/cultural',
      component:CultActivComponent,
    },
    {
      path:'e-commerce/team',
      component:TeamComponent
    },{
      path:'e-commerce/volunteering',
      component:VolunteeringComponent
    },{
      path:'e-commerce/volunteering-list',
      component:VolunteeringListComponent
    },
    
    {
      path:'e-commerce/lunar-calendar-details',
      component:LunarCalendarDetailsComponent
    },{
      path:'e-commerce/profile',
      component:ProfileComponent
    },
    
    {
      path: 'e-commerce/DonationForm',
      component: DonationFormComponent,
    },
    {
      path: 'e-commerce/donation-list',
      component: DonationListComponent,
    },
    {
      path: 'e-commerce/contact-us',
      component: ContactUsComponent,
    },
    {
      path: 'e-commerce/announcements',
      component: AnnouncementsComponent,
    },
    {
      path: 'e-commerce/donation',
      component: DonationModelpageComponent,
    },
    {
      path: 'e-commerce/Addfamilymember',
      component: AddfamilymemberComponent,
      
    },
    {
      path: 'e-commerce/temple-timings',
      component: TempleTimingsComponent,
    },
    {
      path: 'e-commerce/faq',
      component: FaqComponent,
    },{
      path: 'e-commerce/login',
      component: LoginComponent,
    },
    {
      path: 'e-commerce/about-us',
      component: AboutUsComponent,
    },
    {
      path: 'e-commerce/Sponsorship',
      component: SponsorshipListComponent,
    },
    {
      path: 'e-commerce/photo-album',
      component: PhotoAlbumComponent,
    },

    {
      path: 'e-commerce/pooja-items',
      component: PoojaItemsComponent,
    },
    {
      path: 'iot-dashboard',
      component: DashboardComponent,
    },
    {
      path: 'layout',
      loadChildren: () => import('./layout/layout.module')
        .then(m => m.LayoutModule),
    },
    {
      path: 'forms',
      loadChildren: () => import('./forms/forms.module')
        .then(m => m.FormsModule),
    },
    {
      path: 'ui-features',
      loadChildren: () => import('./ui-features/ui-features.module')
        .then(m => m.UiFeaturesModule),
    },
    {
      path: 'modal-overlays',
      loadChildren: () => import('./modal-overlays/modal-overlays.module')
        .then(m => m.ModalOverlaysModule),
    },
    {
      path: 'extra-components',
      loadChildren: () => import('./extra-components/extra-components.module')
        .then(m => m.ExtraComponentsModule),
    },
    {
      path: 'maps',
      loadChildren: () => import('./maps/maps.module')
        .then(m => m.MapsModule),
    },
    {
      path: 'charts',
      loadChildren: () => import('./charts/charts.module')
        .then(m => m.ChartsModule),
    },
    {
      path: 'editors',
      loadChildren: () => import('./editors/editors.module')
        .then(m => m.EditorsModule),
    },
    {
      path: 'tables',
      loadChildren: () => import('./tables/tables.module')
        .then(m => m.TablesModule),
    },
    {
      path: 'miscellaneous',
      loadChildren: () => import('./miscellaneous/miscellaneous.module')
        .then(m => m.MiscellaneousModule),
    },
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
    {
      path: '**',
      component: NotFoundComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
