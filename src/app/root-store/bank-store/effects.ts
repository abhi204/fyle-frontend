import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import * as branchSearchActions from "./actions";
import { SearchService } from "../../services/branch-search.service";

@Injectable()
export class BranchSearchEffects {

  @Effect() LoadSearch$ = this.actions$
    .pipe(
      ofType<branchSearchActions.LoadSearchAction>(branchSearchActions.SearchActionTypes.LOAD_SEARCH),
      mergeMap(
        (action) => this.SearchService.getSearchData(action.payload)
          .pipe(
            map(response => {
              return new branchSearchActions.LoadSearchSuccessAction(response)
            }),
            catchError(error => of(new branchSearchActions.LoadSearchFailAction(error)))
          )
      ),
  )

  @Effect() LoadBranchSearch$ = this.actions$
    .pipe(
      ofType<branchSearchActions.LoadSearchAction>(branchSearchActions.SearchActionTypes.LOAD_BRANCH_SEARCH),
      mergeMap(
        (action) => this.SearchService.getBranchSearchData(action.payload)
          .pipe(
            map(response => {
              return new branchSearchActions.LoadSearchSuccessAction(response)
            }),
            catchError(error => of(new branchSearchActions.LoadSearchFailAction(error)))
          )
      ),
  )
  

  @Effect() LoadSearchPage$ = this.actions$
  .pipe(
    ofType<branchSearchActions.LoadSearchPageAction>(branchSearchActions.SearchActionTypes.LOAD_PAGE),
    mergeMap(
      (action) => this.SearchService.fetchPage(action.payload)
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
    private SearchService: SearchService
  ) { }
}
