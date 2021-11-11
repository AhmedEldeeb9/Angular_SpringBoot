import {Component, OnInit} from '@angular/core';
import {LoginServiceService} from "../login-service.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'ntg-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.scss']
})
export class LoginpageComponent implements OnInit {
  username: any = 'admin';
  password: any = 'ntg';

  constructor(private loginService: LoginServiceService, private http: HttpClient) {
  }

  ngOnInit(): void {
  }

  HandleLoginClick() {

    let body = {
      "userName": this.username,
      "password": this.password
    };
    let url = "/rest/login";
    this.http.post(url, body).subscribe((resp: any) => {
      if (resp.error) {
        alert(resp.error);
      } else {
        this.loginService.logMeIn(resp.fullName, resp.sessionID);
      }
    }, error => {

      alert(error.message || error);

    });

  }

}
