import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import {FlightSearchComponent} from './flightsearch/flightsearch.component';
import {FlightSearchServiceService} from "./flight-search-service.service";

@NgModule({
  declarations: [
    AppComponent,
    FlightSearchComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    TypeaheadModule.forRoot()
  ],
  providers: [FlightSearchServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
