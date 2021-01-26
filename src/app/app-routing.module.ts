import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BankComponent } from "./bank/bank.component";
import { FavouriteComponent } from "./favourite/favourite.component";

const routes: Routes = [
  { path: 'favourites', component: FavouriteComponent },
  { path: '', component: BankComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
