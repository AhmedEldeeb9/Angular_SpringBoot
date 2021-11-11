import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginpageComponent } from './loginpage/loginpage.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    LoginpageComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,HttpClientModule
  ]
})
export class LoginModule { }
