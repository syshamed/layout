import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found';
import { LoginPanelComponent } from './entry/login-panel/login-panel.component';
import { AuthorComponent } from './author/author.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login', },
  { path: 'login', component: LoginPanelComponent },
  { path: 'author', component: AuthorComponent },
  { path: '**', pathMatch: 'full', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routableComponents = [
  AuthorComponent,
  LoginPanelComponent,
  PageNotFoundComponent
];