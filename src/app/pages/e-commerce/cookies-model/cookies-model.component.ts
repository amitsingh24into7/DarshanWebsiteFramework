import { Component, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'ngx-cookies-model',
  templateUrl: './cookies-model.component.html',
  styleUrls: ['./cookies-model.component.scss']
})
export class CookiesModelComponent implements OnInit {

  constructor(protected ref: NbDialogRef<CookiesModelComponent>) { }

  ngOnInit() {
  }
  cancel() {
    this.ref.close();
  }

  submit(name) {
    this.ref.close(name);
    localStorage.setItem('isCookie_Policy',name);
  }
}
