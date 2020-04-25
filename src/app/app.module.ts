import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiModule } from './api';
import { HttpClientModule } from '@angular/common/http';
import { BurgerDetailComponent } from './burger-detail/burger-detail.component';
import { BurgerListComponent } from './burger-list/burger-list.component';

@NgModule({
  declarations: [
    AppComponent,
    BurgerDetailComponent,
    BurgerListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ApiModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
