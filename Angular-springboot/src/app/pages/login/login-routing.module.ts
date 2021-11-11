import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginpageComponent} from "./loginpage/loginpage.component";

const routes: Routes = [

  {path: 'login', component: LoginpageComponent},
  {path: '**', redirectTo: 'login'}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule {
}
