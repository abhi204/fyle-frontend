import { BranchSearchActionTypes as types } from "./actions";
import { BranchSearchState, initialState } from "./state";

export function BranchSearchReducer(state = initialState, action): BranchSearchState {
    switch (action.type) {
        case types.LOAD_BRANCH_SEARCH:{
            return {
                ...state,
                loading: true,
                loaded: false
            };
        }
        case types.LOAD_BRANCH_SEARCH_SUCCESS: {
            return {
                ...state,
                loading: false,
                loaded: true,
                searchData: action.payload,
            }
        }
        case types.LOAD_BRANCH_SEARCH_FAIL: {
            return {
                ...state,
                loading: false,
                loaded: false,
                searchData: null,
                error: action.payload,
            }
        }
        case types.LOAD_PAGE: {
            return {
                ...state,
                loading: true,
                loaded: false
            }
        }
        case types.LOAD_PAGE_SUCCESS: {
            return {
                ...state,
                loading: false,
                loaded: true,
                searchData: action.payload,
            }
        }
        case types.LOAD_PAGE_FAIL: {
            return {
                ...state,
                loading: false,
                loaded: false,
                error: action.payload,
            }
        }
        default:{
            return state;
        }
    }
}