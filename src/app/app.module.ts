import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { TopNavBarComponent } from './top-nav-bar/top-nav-bar.component';
import { HeroImageComponent } from './hero-image/hero-image.component';
import { LeftFilterBarComponent } from './left-filter-bar/left-filter-bar.component';
import { CongressBoxComponent } from './congress-box/congress-box.component';
import { CongressCardComponent } from './congress-card/congress-card.component';
import { ContentBoxComponent } from './content-box/content-box.component';
import { FilterCardComponent } from './filter-card/filter-card.component';
import { MouseoverCongressCardDirective } from './mouseover-congress-card.directive';



@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    HeroImageComponent,
    LeftFilterBarComponent,
    CongressBoxComponent,
    CongressCardComponent,
    ContentBoxComponent,
    FilterCardComponent,
    MouseoverCongressCardDirective

  ],
  imports: [
    BrowserModule,
      FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
