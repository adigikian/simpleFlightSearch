import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FlightSearchComponent} from "./flightsearch/flightsearch.component";

const routes: Routes = [{ path: 'flight-search', component: FlightSearchComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
