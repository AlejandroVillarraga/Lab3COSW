import{Component, ViewChild, Renderer}from'@angular/core';
import { FormGroup } from '@angular/forms/src/model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {ElementRef} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'app';
  private modalBody:string;

  constructor(private modalService:NgbModal
   ){

    }

  search(modalSearch,){
    this.modalBody="<div>This feature is not implemented yet. Sorry for the inconvenience</div>";
    this.modalService.open(modalSearch);
  }
}
