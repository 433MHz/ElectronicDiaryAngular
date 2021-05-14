import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { SecondTopBarComponent } from './second-top-bar/second-top-bar.component';
import { ThirdTopBarComponent } from './third-top-bar/third-top-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    SecondTopBarComponent,
    ThirdTopBarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
