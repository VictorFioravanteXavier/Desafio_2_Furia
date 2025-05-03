import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  loginScreen: boolean = true;

  constructor(private router: Router) {}

  ngOnInit(): void {
    const currentUrl = this.router.url;

    if (!currentUrl.includes('app')) {
      this.loginScreen = true;
    } else {
      this.loginScreen = false;
    }
  }

}
