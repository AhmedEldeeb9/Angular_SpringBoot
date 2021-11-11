import {Injectable} from '@angular/core';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  private isLogin = false;
  public User_Name: any = '';
  private SessionID: any = '';

  constructor(private route : Router) {

    this.isLogin = localStorage.getItem('isLogin') == '1';
    this.User_Name = localStorage.getItem('User_Name');
    this.SessionID = localStorage.getItem('SessionID');


  }


  VerfayLogin() {
    return this.isLogin;
  }

  logMeIn(Full_Name: string, SessionID: string) {

    this.isLogin = true;
    this.User_Name = Full_Name;
    this.SessionID = SessionID;

    localStorage.setItem('isLogin', '1');
    localStorage.setItem('User_Name', Full_Name);
    localStorage.setItem('SessionID', SessionID);
    this.route.navigate(['pages']);


  }
  logOut(){
    this.isLogin = false;
    this.User_Name = null;
    this.SessionID = null;

    localStorage.removeItem('isLogin' );
    localStorage.removeItem('User_Name' );
    localStorage.removeItem('SessionID' );
    this.route.navigate(['loginPage']);

  }
}
