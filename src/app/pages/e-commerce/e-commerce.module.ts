import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {
  NbButtonModule,
  NbCardModule,
  NbProgressBarModule,
  NbTabsetModule,
  NbUserModule,
  NbDialogModule,
  NbIconModule,
  NbSelectModule,
  NbListModule,
  NbDatepickerModule,
} from '@nebular/theme';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ThemeModule } from '../../@theme/theme.module';
import { ECommerceComponent } from './e-commerce.component';
import { ProfitCardComponent } from './profit-card/profit-card.component';
import { ECommerceChartsPanelComponent } from './charts-panel/charts-panel.component';
import { OrdersChartComponent } from './charts-panel/charts/orders-chart.component';
import { ProfitChartComponent } from './charts-panel/charts/profit-chart.component';
import { ChartPanelHeaderComponent } from './charts-panel/chart-panel-header/chart-panel-header.component';
import { ChartPanelSummaryComponent } from './charts-panel/chart-panel-summary/chart-panel-summary.component';
import { ChartModule } from 'angular2-chartjs';
import { StatsCardBackComponent } from './profit-card/back-side/stats-card-back.component';
import { StatsAreaChartComponent } from './profit-card/back-side/stats-area-chart.component';
import { StatsBarAnimationChartComponent } from './profit-card/front-side/stats-bar-animation-chart.component';
import { StatsCardFrontComponent } from './profit-card/front-side/stats-card-front.component';
import { TrafficRevealCardComponent } from './traffic-reveal-card/traffic-reveal-card.component';
import { TrafficBarComponent } from './traffic-reveal-card/front-side/traffic-bar/traffic-bar.component';
import { TrafficFrontCardComponent } from './traffic-reveal-card/front-side/traffic-front-card.component';
import { TrafficCardsHeaderComponent } from './traffic-reveal-card/traffic-cards-header/traffic-cards-header.component';
import { TrafficBackCardComponent } from './traffic-reveal-card/back-side/traffic-back-card.component';
import { TrafficBarChartComponent } from './traffic-reveal-card/back-side/traffic-bar-chart.component';
import {
  ECommerceVisitorsAnalyticsComponent,
} from './visitors-analytics/visitors-analytics.component';
import {
  ECommerceVisitorsAnalyticsChartComponent,
} from './visitors-analytics/visitors-analytics-chart/visitors-analytics-chart.component';
import {
  ECommerceVisitorsStatisticsComponent,
} from './visitors-analytics/visitors-statistics/visitors-statistics.component';
import { ECommerceLegendChartComponent } from './legend-chart/legend-chart.component';
import { ECommerceUserActivityComponent } from './user-activity/user-activity.component';
import { ECommerceProgressSectionComponent } from './progress-section/progress-section.component';
import { SlideOutComponent } from './slide-out/slide-out.component';

import { CountryOrdersComponent } from './country-orders/country-orders.component';
import { CountryOrdersMapComponent } from './country-orders/map/country-orders-map.component';
import { CountryOrdersMapService } from './country-orders/map/country-orders-map.service';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { CountryOrdersChartComponent } from './country-orders/chart/country-orders-chart.component';
import { EarningCardComponent } from './earning-card/earning-card.component';
import { EarningCardBackComponent } from './earning-card/back-side/earning-card-back.component';
import { EarningPieChartComponent } from './earning-card/back-side/earning-pie-chart.component';
import { EarningCardFrontComponent } from './earning-card/front-side/earning-card-front.component';
import { EarningLiveUpdateChartComponent } from './earning-card/front-side/earning-live-update-chart.component';
import { EventListComponent } from './event-list/event-list.component';
import { ServiceListComponent } from './service-list/service-list.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FaqComponent } from './faq/faq.component';
import { DashboardSliderComponent } from './dashboard-slider/dashboard-slider.component';
import { PoojaItemsComponent } from './pooja-items/pooja-items.component';
import { PhotoAlbumComponent } from './photo-album/photo-album.component';
import { ModelPopupComponent } from './photo-album/model-popup/model-popup.component';
import { SponsorshipListComponent } from './sponsorship-list/sponsorship-list.component';
import { NgxPayPalModule } from 'ngx-paypal';
import { DonationModelpageComponent } from './donation-modelpage/donation-modelpage.component';
import { ScheduleForTodayComponent } from './schedule-for-today/schedule-for-today.component';
import { ScheduleForNextxDaysComponent } from './schedule-for-nextx-days/schedule-for-nextx-days.component';
import { TempleTimingsComponent } from './temple-timings/temple-timings.component';
import { AnnouncementsComponent } from './announcements/announcements.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import {LoginComponent} from './login/login.component'
import { SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider,
  FacebookLoginProvider } from 'angularx-social-login';
import { DonationFormComponent } from './donation-form/donation-form.component';
import { DonationListComponent } from './donation-list/donation-list.component';
import { TeamComponent } from './team/team.component';
import { GalleryDevotionalComponent } from './gallery-devotional/gallery-devotional.component';
import { CultActivComponent } from './cult-activ/cult-activ.component';
import { VolunteeringComponent } from './volunteering/volunteering.component';
import { LunarCalendarDetailsComponent } from './lunar-calendar-details/lunar-calendar-details.component';
import { ProfileComponent } from './profile/profile.component';
import { MydonationDetailComponent } from './mydonation-detail/mydonation-detail.component';
import { DashboardEventListComponent } from './dashboard-event-list/dashboard-event-list.component';
import { DashboardServiceListComponent } from './dashboard-service-list/dashboard-service-list.component';
import { DashboardAnnouncementsComponent } from './dashboard-announcements/dashboard-announcements.component';
import { VolunteeringListComponent } from './volunteering-list/volunteering-list.component';
import { AddfamilymemberComponent } from './addfamilymember/addfamilymember.component';
import { CookiesModelComponent } from './cookies-model/cookies-model.component';
import { PaypalSubscriptionDirective } from '../../paypal-subscription.directive';

// Configs 

export function getAuthServiceConfigs() {
  const config = new AuthServiceConfig(
  [
  {
      id: FacebookLoginProvider.PROVIDER_ID,
      provider: new FacebookLoginProvider('Your_Facebook_Client_ID')
  },
  {
      id: GoogleLoginProvider.PROVIDER_ID,
      provider: new GoogleLoginProvider('498208495567-k0u43naugouk6ugn82mhf0m6ocultt08.apps.googleusercontent.com')
  }
  ]
  );
  return config;
  }
@NgModule({
  imports: [
    ThemeModule,
    NbCardModule,
    NbUserModule,
    NbButtonModule,
    NbIconModule,
    SocialLoginModule,
    NbDialogModule.forChild(),
    NbDatepickerModule.forRoot(),
    NbTabsetModule,
    NbSelectModule,
    NbListModule,
    ChartModule,
    NbProgressBarModule,
    NgxEchartsModule,
    NgxChartsModule,
    LeafletModule,
    NgbModule,
    NgxPayPalModule,
    FormsModule, ReactiveFormsModule
  ],
  declarations: [
    PaypalSubscriptionDirective,
    ECommerceComponent,
    StatsCardFrontComponent,
    StatsAreaChartComponent,
    StatsBarAnimationChartComponent,
    ProfitCardComponent,
    ECommerceChartsPanelComponent,
    ChartPanelHeaderComponent,
    ChartPanelSummaryComponent,
    OrdersChartComponent,
    ProfitChartComponent,
    StatsCardBackComponent,
    TrafficRevealCardComponent,
    TrafficBarChartComponent,
    TrafficFrontCardComponent,
    TrafficBackCardComponent,
    TrafficBarComponent,
    TrafficCardsHeaderComponent,
    CountryOrdersComponent,
    CountryOrdersMapComponent,
    CountryOrdersChartComponent,
    ECommerceVisitorsAnalyticsComponent,
    ECommerceVisitorsAnalyticsChartComponent,
    ECommerceVisitorsStatisticsComponent,
    ECommerceLegendChartComponent,
    ECommerceUserActivityComponent,
    ECommerceProgressSectionComponent,
    SlideOutComponent,
    EarningCardComponent,
    EarningCardFrontComponent,
    EarningCardBackComponent,
    EarningPieChartComponent,
    EarningLiveUpdateChartComponent,
    EventListComponent,
    ServiceListComponent,
    AboutUsComponent,
    FaqComponent,
    DashboardSliderComponent,
    PoojaItemsComponent,
    PhotoAlbumComponent,
    ModelPopupComponent,
    SponsorshipListComponent,
    DonationModelpageComponent,
    ScheduleForTodayComponent,
    ScheduleForNextxDaysComponent,
    TempleTimingsComponent,
    AnnouncementsComponent,
    FeedbackComponent,
    LoginComponent,
    ContactUsComponent,
    DonationFormComponent,
    DonationListComponent,
    TeamComponent,
    GalleryDevotionalComponent,
    CultActivComponent,
    VolunteeringComponent,
    LunarCalendarDetailsComponent,
    ProfileComponent,
    MydonationDetailComponent,
    DashboardEventListComponent,
    DashboardServiceListComponent,
    DashboardAnnouncementsComponent,
    VolunteeringListComponent,
    AddfamilymemberComponent,
    CookiesModelComponent,
  ],
  entryComponents: [
    ModelPopupComponent,
    CookiesModelComponent
  ],
  providers: [
    CountryOrdersMapService,
    {provide: AuthServiceConfig,
    useFactory: getAuthServiceConfigs}
    
  ],
})
export class ECommerceModule { }
