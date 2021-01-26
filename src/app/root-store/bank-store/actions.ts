import { Action } from "@ngrx/store";

import { BranchSearch } from "./models";

export enum SearchActionTypes {
    LOAD_SEARCH = " [Bank] Load Search data",
    LOAD_BRANCH_SEARCH = " [Bank] Load Branch Search data",
    LOAD_SEARCH_SUCCESS = " [Bank] Load Search data Success",
    LOAD_SEARCH_FAIL = " [Bank] Load Search data Failed",
    LOAD_PAGE = " [Bank] Load Search Page data",
    LOAD_PAGE_SUCCESS = " [Bank] Load Search Page data Success",
    LOAD_PAGE_FAIL = " [Bank] Load Search Page data Failed",
}

export class LoadSearchAction implements Action {
    readonly type = SearchActionTypes.LOAD_SEARCH

    constructor(public payload: { searchText: string, pageSize: number, city: string }) { }
}

export class LoadBranchSearchAction implements Action {
    readonly type = SearchActionTypes.LOAD_BRANCH_SEARCH

    constructor(public payload: { searchText: string, pageSize: number, city: string }) { }
}


export class LoadSearchSuccessAction implements Action {
    readonly type = SearchActionTypes.LOAD_SEARCH_SUCCESS

    constructor(public payload: { data: BranchSearch }) { }
}


export class LoadSearchFailAction implements Action {
    readonly type = SearchActionTypes.LOAD_SEARCH_FAIL

    constructor(public payload: string) { }
}

export class LoadSearchPageAction implements Action {
    readonly type = SearchActionTypes.LOAD_SEARCH

    constructor(public payload: { pageUrl: string }) { }
}


export class LoadSearchPageSuccessAction implements Action {
    readonly type = SearchActionTypes.LOAD_SEARCH_SUCCESS

    constructor(public payload: { data: BranchSearch }) { }
}


export class LoadSearchPageFailAction implements Action {
    readonly type = SearchActionTypes.LOAD_SEARCH_FAIL

    constructor(public payload: string) { }
}


export type BranchSearchActions = LoadSearchAction |
    LoadBranchSearchAction |
    LoadSearchSuccessAction | 
    LoadSearchFailAction |
    LoadSearchPageAction |
    LoadSearchPageSuccessAction |
    LoadSearchPageFailAction ;