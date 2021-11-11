import {Component} from '@angular/core';
import {LoginServiceService} from "./pages/login/login-service.service";
import {NavigationStart, Route, Router} from "@angular/router";

@Component({
  selector: 'ntg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private loginService: LoginServiceService, private route: Router) {

    this.route.events.subscribe(event => {

      if (event instanceof NavigationStart) {
        let url = event.url;
        if (url.indexOf('pages') > -1) {

          if (this.loginService.VerfayLogin() == false) {
            this.route.navigate(['loginPage']);
          }

        } else {
          if (this.loginService.VerfayLogin()) {
            this.route.navigate(['pages']);
          }

        }

      }

    });

  }
}
