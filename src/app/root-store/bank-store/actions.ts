import { Action } from "@ngrx/store";

import { BranchSearch } from "./models";

export enum BranchSearchActionTypes {
    LOAD_BRANCH_SEARCH = " [Bank] Load Branch Search data",
    LOAD_BRANCH_SEARCH_SUCCESS = " [Bank] Load Branch Search data Success",
    LOAD_BRANCH_SEARCH_FAIL = " [Bank] Load Branch Search data Failed",
    LOAD_PAGE = " [Bank] Load Search Page data",
    LOAD_PAGE_SUCCESS = " [Bank] Load Search Page data Success",
    LOAD_PAGE_FAIL = " [Bank] Load Search Page data Failed",
}

// Search Actions
export class LoadBranchSearchAction implements Action {
    readonly type = BranchSearchActionTypes.LOAD_BRANCH_SEARCH

    constructor(public payload: { searchText: string, pageSize: number }) { }
}


export class LoadBranchSearchSuccessAction implements Action {
    readonly type = BranchSearchActionTypes.LOAD_BRANCH_SEARCH_SUCCESS

    constructor(public payload: { data: BranchSearch }) { }
}


export class LoadBranchSearchFailAction implements Action {
    readonly type = BranchSearchActionTypes.LOAD_BRANCH_SEARCH_FAIL

    constructor(public payload: string) { }
}

export class LoadSearchPageAction implements Action {
    readonly type = BranchSearchActionTypes.LOAD_BRANCH_SEARCH

    constructor(public payload: { pageUrl: string }) { }
}


export class LoadSearchPageSuccessAction implements Action {
    readonly type = BranchSearchActionTypes.LOAD_BRANCH_SEARCH_SUCCESS

    constructor(public payload: { data: BranchSearch }) { }
}


export class LoadSearchPageFailAction implements Action {
    readonly type = BranchSearchActionTypes.LOAD_BRANCH_SEARCH_FAIL

    constructor(public payload: string) { }
}


export type BranchSearchActions = LoadBranchSearchAction | 
    LoadBranchSearchSuccessAction | 
    LoadBranchSearchFailAction |
    LoadSearchPageAction |
    LoadSearchPageSuccessAction |
    LoadSearchPageFailAction ;