import { SharedvarService } from './../sharedvar.service';
import { Component, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {
  toggle:boolean = true;
  constructor(private service: SharedvarService) { }
  openSideNav(){
  this.service.setValue(this.toggle);
  }
  @Output() featureSelected = new EventEmitter<string>();
  onTest(feature: string) {
    this.featureSelected.emit(feature);
  }
}
