import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { BranchSearchEffects } from './effects';
import { BranchSearchReducer } from './reducer';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('branchSearch', BranchSearchReducer),
    EffectsModule.forFeature([BranchSearchEffects])
  ],
  providers: [BranchSearchEffects]
})
export class BankStoreModule { }
