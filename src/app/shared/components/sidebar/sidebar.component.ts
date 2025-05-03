import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public currentUrl: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.currentUrl = this.router.url;

    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event) => {
        const navEndEvent = event as NavigationEnd;
        this.currentUrl = navEndEvent.urlAfterRedirects;
      });
  }
}
