import { Component, OnInit } from '@angular/core';
import {MenuInfo} from "../menu/MenuInfo";
import {LoginServiceService} from "../../pages/login/login-service.service";

@Component({
  selector: 'ntg-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  MenuData: Array<MenuInfo> = [
    {Caption : 'Home' , href : '/pages/home',icon: 'fa fa-home'},
    {Caption : 'Tool' , icon : 'fa fa-book' , childs : [

        {Caption : 'Calc' , href: '/pages/calc' , icon : 'fa fa-calculator'},

      ]},
    {Caption : 'Employee List' , href : '/pages/users/list' ,icon : 'fa fa-list-alt'},

  ];

  constructor(public loginService : LoginServiceService) { }

  ngOnInit(): void {
  }

  HandleLogOut($event: MouseEvent) {
    $event.preventDefault();
    this.loginService.logOut();
  }
}
