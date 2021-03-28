import { SharedvarService } from './../sharedvar.service';
import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  
  constructor(
    private breakpointObserver: BreakpointObserver,
    private service: SharedvarService) {}
  // isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  //   .pipe(
  //     map(result => result.matches),
  //     shareReplay()
  //   );
    //public flag: boolean;

    loadFeature = 'abc';
     onTestNav(feature: string) {
      this.loadFeature = feature;
   }
    sss = getValue
    routerInfo = false;
    ngOnInit(){
      this.service.getValue().subscribe((value)=> {
        this.routerInfo = value;
        
    });
      }
    }
  
