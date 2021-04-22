import { Component, OnInit, Input } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
@Component({
  selector: 'ngx-model-popup',
  templateUrl: './model-popup.component.html',
  styleUrls: ['./model-popup.component.scss']
})
export class ModelPopupComponent implements OnInit {

  @Input() title: string;
  constructor(protected ref: NbDialogRef<ModelPopupComponent>) { 
   // console.log("-------",ref);
  }
  dismiss() {
    this.ref.close();
  }
  ngOnInit() {
  }

}
