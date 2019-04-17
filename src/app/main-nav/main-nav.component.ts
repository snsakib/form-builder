import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit {
  // Sets the menu links
  pages = [
    {
      routerLink: '/about',
      linkText: 'About'
    },
    {
      routerLink: '/contact',
      linkText: 'Contact'
    }
  ];

  // If the width of screen is equals or greather than 1024px, the value of the property becomes true.
  isLaptop: boolean;

  // Checks the window width & sets the 'isLaptop' property value
  @HostListener('window:resize')
  onResize() {
    if (window.innerWidth < 1024) {
      this.isLaptop = false;
    } else {
      this.isLaptop = true;
    }
  }

  constructor() {}

  ngOnInit() {
    this.onResize();
  }
}
