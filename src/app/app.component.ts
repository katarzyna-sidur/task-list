import { Component } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { LoginModalComponent } from './modals/login-modal/login-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

 bsModalRef: BsModalRef;

  constructor( private modalService: BsModalService) {}

  openModal() {
      this.bsModalRef = this.modalService.show(LoginModalComponent);
      this.bsModalRef.content.closeBtnName = 'Close';
  }
}
