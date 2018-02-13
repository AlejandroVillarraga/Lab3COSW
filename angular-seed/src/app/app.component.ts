import{Component, ViewChild, Renderer}from'@angular/core';
import { FormGroup } from '@angular/forms/src/model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {ElementRef} from '@angular/core';
import { AuthService } from './common/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'app';
  private modalBody:string;

  constructor(
    private modalService:NgbModal,
    public authService: AuthService,
    public router: Router
  ) {
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['/']);
    }
  }

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }

  search(modalSearch,){
    this.modalBody="<div>This feature is not implemented yet. Sorry for the inconvenience</div>";
    this.modalService.open(modalSearch);
  }

  signOut() {
    this.authService.signOut();
  }

}
