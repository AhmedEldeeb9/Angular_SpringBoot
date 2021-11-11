import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {CalcComponent} from "./pages/calc/calc.component";
import {PagesComponent} from "./pages/pages.component";

const routes: Routes = [

  {
    path: 'pages', component: PagesComponent, children: [

      {path: 'home', component: HomeComponent},
      {path: 'calc', component: CalcComponent},
      {path: 'users', loadChildren: () => import('./pages/users/users.module').then(m => m.UsersModule)}
      ,{path: '**', redirectTo: 'home'}

    ]
  },
  {
    path: 'loginPage', loadChildren: () => import('./pages/login/login.module').then(m =>
      m.LoginModule
    )
  }

  , {path: '**', redirectTo: 'pages/home'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
