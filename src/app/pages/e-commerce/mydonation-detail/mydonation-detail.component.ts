import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'ngx-mydonation-detail',
  templateUrl: './mydonation-detail.component.html',
  styleUrls: ['./mydonation-detail.component.scss']
})
export class MydonationDetailComponent implements OnInit {
  donationdataobj: any;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    if( this.donationdataobj=window.history.state.donationobj){
     
    }else{
      this.router.navigate(['pages/e-commerce/donation-list']);
    }
  }


  
  backEvent(){
    this.router.navigate(['pages/e-commerce/donation-list']);
  }

}
