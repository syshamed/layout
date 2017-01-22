import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { AppRoutingModule, routableComponents } from './app-routing.module';
import './core/rxjs-extensions';

import { AppComponent } from './app.component';
import { AuthorComponent } from './author/author.component';
import { EntryPanelComponent } from './entry-panel/entry-panel.component';
import { LoginPanelComponent } from './entry/login-panel/login-panel.component';
import { NavComponent } from './core/nav/nav.component';
import { QuestionnaireService } from './models/questionnaire.service';
import { InMemoryStoreService } from './api/in-memory-store.service';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

@NgModule({
  declarations: [
    AppComponent,
    AuthorComponent,
    EntryPanelComponent,
    LoginPanelComponent,
    NavComponent,
    routableComponents,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    AppRoutingModule,
    InMemoryWebApiModule.forRoot(InMemoryStoreService, { delay: 600 })
  ],
  providers: [QuestionnaireService],
  bootstrap: [AppComponent]
})
export class AppModule { }
