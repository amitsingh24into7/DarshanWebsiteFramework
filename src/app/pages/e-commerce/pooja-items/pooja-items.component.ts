import { Component} from '@angular/core';
import { OnDestroy } from '@angular/core';
import { takeWhile } from 'rxjs/operators';
import { forkJoin } from 'rxjs';
import { Contacts, RecentUsers, UserData } from '../../../@core/data/users';


@Component({
  selector: 'ngx-pooja-items',
  templateUrl: './pooja-items.component.html',
  styleUrls: ['./pooja-items.component.scss']
})
export class PoojaItemsComponent implements OnDestroy {

  private alive = true;

  contacts: any[];
  recent: any[];

  constructor(private userService: UserData) {
    forkJoin(
      this.userService.getContacts(),
      this.userService.getRecentUsers(),
    )
      .pipe(takeWhile(() => this.alive))
      .subscribe(([contacts, recent]: [Contacts[], RecentUsers[]]) => {
        this.contacts = contacts;
        this.recent = recent;
      });
  }

  
  ngOnDestroy() {
    this.alive = false;
  }
}

