import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import * as branchSearchActions from "./actions";
import { BranchSearchService } from "../../services/branch-search.service";

@Injectable()
export class BranchSearchEffects {

  @Effect() loadBranchSearch$ = this.actions$
    .pipe(
      ofType<branchSearchActions.LoadBranchSearchAction>(branchSearchActions.BranchSearchActionTypes.LOAD_BRANCH_SEARCH),
      mergeMap(
        (action) => this.branchSearchService.getBranchSearchData(action.payload)
          .pipe(
            map(response => {
              return new branchSearchActions.LoadBranchSearchSuccessAction(response)
            }),
            catchError(error => of(new branchSearchActions.LoadBranchSearchFailAction(error)))
          )
      ),
  )

  @Effect() loadBranchSearchPage$ = this.actions$
  .pipe(
    ofType<branchSearchActions.LoadSearchPageAction>(branchSearchActions.BranchSearchActionTypes.LOAD_PAGE),
    mergeMap(
      (action) => this.branchSearchService.fetchPage(action.payload)
        .pipe(
          map(response => {
            return new branchSearchActions.LoadSearchPageSuccessAction(response)
          }),
          catchError(error => of(new branchSearchActions.LoadSearchPageFailAction(error)))
        )
    ),
)

  constructor(
    private actions$: Actions,
    private branchSearchService: BranchSearchService
  ) { }
}
