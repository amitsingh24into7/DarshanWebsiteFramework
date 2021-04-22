import { NbMenuItem } from '@nebular/theme';

import { Apiconfig } from '../../app/@core/utils';
import { link } from 'fs';


export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Home',
    icon: 'home-outline',
    link: '/pages/dashboard',
    home: true,
  },{
    title: 'About',
    icon:'info-outline',
    link: '/pages/e-commerce/about-us',
  },
  {
    title: 'Services',
    icon:'options-outline',
    link: '/pages/e-commerce/service-list',
  },
  {
    title: 'Temple Timings​',
    icon:'clock-outline',
    link: '/pages/e-commerce/temple-timings'
  },
  {
    title: 'Events',
    icon:'shake-outline',
    link: '/pages/e-commerce/cultural'
  },
  {
    title: 'Devotional Gallery​',
    icon:'video-outline',
    link: '/pages/e-commerce/devotional-gallery'
  },
  {
    title: 'Album​',
    icon:'camera-outline',
    link: '/pages/e-commerce/photo-album',
  },
  {
    title: 'Donations',
    icon:'gift-outline',
    link: '/pages/e-commerce/donation',
  },
  {
    title: 'Teams',
    icon:'people-outline',
    link: '/pages/e-commerce/team',
  },
  {
    title: 'Volunteering',
    icon:'award-outline',
    link: '/pages/e-commerce/volunteering',
  },
  // {
  //   title: 'Volunteering Detail',
  //   icon:'radio-button-on-outline',
  //   link: '/pages/e-commerce/volunteering-list',
  // },
  {
    title:'Calendar',
    icon:'calendar-outline',
    link: '/pages/e-commerce/lunar-calendar-details'
  },
  {
      title:'Contact Us',
      icon:'at-outline',
      link: '/pages/maps/gmaps'
  },
  
  {
      title:'Announcements',
      icon:'volume-up-outline',
      link: '/pages/e-commerce/announcements'
    },{
    title:'User Activities',
    icon:'hash-outline',
    link: '/pages/e-commerce/login'
  }
  // {
  //   title: 'LogOut',
  //   icon:'unlock-outline'
  //   //link: '/pages/e-commerce/login'
   
  // }
  
  ,{
    title: 'My Profile',
    link: '/pages/e-commerce/profile'
   
  }
  ,{
    title: 'My Donation',
    icon:'shopping-cart-outline',
    link: '/pages/e-commerce/donation-list'
   
  }

  //-------------------------------------------
  // {
  //   title: 'Information',
  //   icon: 'at',
  //   link: '/pages/e-commerce/about-us'
   
  // },
  // {
  //   title: 'Pooja Items',
  //   icon: 'grid-outline',
  //   link: '/pages/e-commerce/pooja-items'
  // },
  // {
  //   title: 'Photo Album',
  //   icon: 'shuffle-2-outline',
  //   link: '/pages/e-commerce/photo-album'
  // },
  // {
  //   title: 'Faq',
  //   icon: 'logo-buffer',
  //   link: '/pages/e-commerce/faq'
   
  // },
  // {
  //   title: 'Address',
  //   icon: 'map',
  //   link: '/pages/maps/gmaps'
   
  // },
  // {
  //   title:"Calendar"
  // },
  // {
  //   title:'Temple Timings',
  //   link: '/pages/e-commerce/temple-timings'
  // },
  // {
  //   title:'Donations',
  //   link: '/pages/e-commerce/donation'
  // },
  // {
  //   title:'Announcements',
  //   link: '/pages/e-commerce/announcements'
  // },
  // {
  //   title: 'Feedback',
  //   link: '/pages/e-commerce/feedback'
  // },
  // {
  //     title: 'Contact Us',
  //     link: '/pages/e-commerce/contact-us'
  // },
  // {
  //   title: 'Login',
  //   link: '/pages/e-commerce/login'
   
  // }
  // ,{
  //   title: 'LogOut'
  //   //link: '/pages/e-commerce/login'
   
  // },{
  //   title: 'My Profile',
  //   //link: '/pages/e-commerce/login'
   
  // },{
  //   title: 'My Donation',
  //   link: '/pages/e-commerce/donation-list'
   
  // }
  ///-------------------------------------------------------------Defoult

  // ,{
  //   title: 'E-commerce',
  //   icon: 'shopping-cart-outline',
  //   link: '/pages/dashboard',
  //   home: true,
  // },
  // {
  //   title: 'IoT Dashboard',
  //   icon: 'home-outline',
  //   link: '/pages/iot-dashboard',
  // }
  // ,
  // {
  //   title: 'FEATURES',
  //   group: true,
  // },
  // {
  //   title: 'Layout',
  //   icon: 'layout-outline',
  //   children: [
  //     {
  //       title: 'Stepper',
  //       link: '/pages/layout/stepper',
  //     },
  //     {
  //       title: 'List',
  //       link: '/pages/layout/list',
  //     },
  //     {
  //       title: 'Infinite List',
  //       link: '/pages/layout/infinite-list',
  //     },
  //     {
  //       title: 'Accordion',
  //       link: '/pages/layout/accordion',
  //     },
  //     {
  //       title: 'Tabs',
  //       pathMatch: 'prefix',
  //       link: '/pages/layout/tabs',
  //     },
  //   ],
  // },
  // {
  //   title: 'Forms',
  //   icon: 'edit-2-outline',
  //   children: [
  //     {
  //       title: 'Form Inputs',
  //       link: '/pages/forms/inputs',
  //     },
  //     {
  //       title: 'Form Layouts',
  //       link: '/pages/forms/layouts',
  //     },
  //     {
  //       title: 'Buttons',
  //       link: '/pages/forms/buttons',
  //     },
  //     {
  //       title: 'Datepicker',
  //       link: '/pages/forms/datepicker',
  //     },
  //   ],
  // },
  // {
  //   title: 'UI Features',
  //   icon: 'keypad-outline',
  //   link: '/pages/ui-features',
  //   children: [
  //     {
  //       title: 'Grid',
  //       link: '/pages/ui-features/grid',
  //     },
  //     {
  //       title: 'Icons',
  //       link: '/pages/ui-features/icons',
  //     },
  //     {
  //       title: 'Typography',
  //       link: '/pages/ui-features/typography',
  //     },
  //     {
  //       title: 'Animated Searches',
  //       link: '/pages/ui-features/search-fields',
  //     },
  //   ],
  // },
  // {
  //   title: 'Modal & Overlays',
  //   icon: 'browser-outline',
  //   children: [
  //     {
  //       title: 'Dialog',
  //       link: '/pages/modal-overlays/dialog',
  //     },
  //     {
  //       title: 'Window',
  //       link: '/pages/modal-overlays/window',
  //     },
  //     {
  //       title: 'Popover',
  //       link: '/pages/modal-overlays/popover',
  //     },
  //     {
  //       title: 'Toastr',
  //       link: '/pages/modal-overlays/toastr',
  //     },
  //     {
  //       title: 'Tooltip',
  //       link: '/pages/modal-overlays/tooltip',
  //     },
  //   ],
  // },
  // {
  //   title: 'Extra Components',
  //   icon: 'message-circle-outline',
  //   children: [
  //     {
  //       title: 'Calendar',
  //       link: '/pages/extra-components/calendar',
  //     },
  //     {
  //       title: 'Progress Bar',
  //       link: '/pages/extra-components/progress-bar',
  //     },
  //     {
  //       title: 'Spinner',
  //       link: '/pages/extra-components/spinner',
  //     },
  //     {
  //       title: 'Alert',
  //       link: '/pages/extra-components/alert',
  //     },
  //     {
  //       title: 'Calendar Kit',
  //       link: '/pages/extra-components/calendar-kit',
  //     },
  //     {
  //       title: 'Chat',
  //       link: '/pages/extra-components/chat',
  //     },
  //   ],
  // },
  // {
  //   title: 'Maps',
  //   icon: 'map-outline',
  //   children: [
  //     {
  //       title: 'Google Maps',
  //       link: '/pages/maps/gmaps',
  //     },
  //     {
  //       title: 'Leaflet Maps',
  //       link: '/pages/maps/leaflet',
  //     },
  //     {
  //       title: 'Bubble Maps',
  //       link: '/pages/maps/bubble',
  //     },
  //     {
  //       title: 'Search Maps',
  //       link: '/pages/maps/searchmap',
  //     },
  //   ],
  // },
  // {
  //   title: 'Charts',
  //   icon: 'pie-chart-outline',
  //   children: [
  //     {
  //       title: 'Echarts',
  //       link: '/pages/charts/echarts',
  //     },
  //     {
  //       title: 'Charts.js',
  //       link: '/pages/charts/chartjs',
  //     },
  //     {
  //       title: 'D3',
  //       link: '/pages/charts/d3',
  //     },
  //   ],
  // },
  // {
  //   title: 'Editors',
  //   icon: 'text-outline',
  //   children: [
  //     {
  //       title: 'TinyMCE',
  //       link: '/pages/editors/tinymce',
  //     },
  //     {
  //       title: 'CKEditor',
  //       link: '/pages/editors/ckeditor',
  //     },
  //   ],
  // },
  // {
  //   title: 'Tables & Data',
  //   icon: 'grid-outline',
  //   children: [
  //     {
  //       title: 'Smart Table',
  //       link: '/pages/tables/smart-table',
  //     },
  //     {
  //       title: 'Tree Grid',
  //       link: '/pages/tables/tree-grid',
  //     },
  //   ],
  // },
  // {
  //   title: 'Miscellaneous',
  //   icon: 'shuffle-2-outline',
  //   children: [
  //     {
  //       title: '404',
  //       link: '/pages/miscellaneous/404',
  //     },
  //   ],
  // },
  // {
  //   title: 'Auth',
  //   icon: 'lock-outline',
  //   children: [
  //     {
  //       title: 'Login',
  //       link: '/auth/login',
  //     },
  //     {
  //       title: 'Register',
  //       link: '/auth/register',
  //     },
  //     {
  //       title: 'Request Password',
  //       link: '/auth/request-password',
  //     },
  //     {
  //       title: 'Reset Password',
  //       link: '/auth/reset-password',
  //     },
  //   ],
  // },
];
