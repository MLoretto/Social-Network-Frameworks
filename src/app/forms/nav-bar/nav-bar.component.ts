import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));

  constructor(private logoutFirebase: AuthService) { }

  ngOnInit() {
  }

  logoutAuth() {
    this.logoutFirebase.logout().then(
      info => {
        console.log(info)
      }
    )
  }
}


