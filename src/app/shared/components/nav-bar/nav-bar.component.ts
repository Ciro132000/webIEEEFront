import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  nav_change=false;

  @HostListener("document:scroll")
  scrollfunction(){
    if(document.body.scrollTop >0 || document.documentElement.scrollTop > 0){
      this.nav_change=true;
    }else{
      this.nav_change=false;
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
