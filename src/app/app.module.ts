import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { HeroImageComponent } from './hero-image/hero-image.component';
import { LeftFilterBarComponent } from './left-filter-bar/left-filter-bar.component';
import { CongressBoxComponent } from './congress-box/congress-box.component';





import { MouseoverCongressCardDirective } from './mouseover-congress-card.directive';


import { MakeCongressService } from './make-congress.service';
import { ApiCallService } from './api-call-service';

import { FooterComponent } from './footer/footer.component';
import { PartyFilterPipe } from './party-filter.pipe';
import { CheckboxFilterService } from './checkbox-filters.service';
import { ChamberFilterPipe } from './chamber-filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeroImageComponent,
    LeftFilterBarComponent,
    CongressBoxComponent,

    MouseoverCongressCardDirective,
    FooterComponent,
    PartyFilterPipe,
    ChamberFilterPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [MakeCongressService,
              ApiCallService,
              CheckboxFilterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
