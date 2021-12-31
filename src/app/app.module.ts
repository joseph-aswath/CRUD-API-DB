import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TablesComponent } from './tables/tables.component';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TablesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'tables',component:TablesComponent},
      {path:'home',component:HomeComponent}])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
