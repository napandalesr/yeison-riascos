import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})


export class MenuComponent {
  home:boolean = true;
  about:boolean = false;
  works:boolean = false;
  exposition:boolean = false;
  contact:boolean = false;

  menuResponsive: boolean = false;

  activeLink (item:string) {
    this.home = false;
    this.about = false;
    this.works = false;
    this.exposition = false;
    this.contact = false;
    switch(item){
      case "home":
        this.home = true;
        break;
      case "about":
        this.about = true;
        break;
      case "works":
        this.works = true;
        break;
      case "exposition":
        this.exposition = true;
        break;
      case "contact":
        this.contact = true;
    }
  }

  showMenuResponsive() {
    this.menuResponsive = !this.menuResponsive;
  }

}
