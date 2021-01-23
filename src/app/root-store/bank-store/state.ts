import { BranchSearch } from "./models";

export interface BranchSearchState {
    searchData: BranchSearch,
    loading: boolean,
    loaded: boolean,
    error?: string,
}

export const initialState: BranchSearchState = {
    searchData: null,
    loading: false,
    loaded: true,
};