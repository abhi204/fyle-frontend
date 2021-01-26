import { createSelector, createFeatureSelector } from '@ngrx/store';
import { BranchSearchState } from './state';
import { RootState } from '../root-state';
import { LocalDataSource } from 'ng2-smart-table';

export const branchSearchKey = 'branchSearch';

export const selectBranchSearch = createFeatureSelector<RootState, BranchSearchState>(branchSearchKey);

export const selectCallStatus = createSelector(
    selectBranchSearch,
    (state: BranchSearchState) => ({
        loading: state.loading,
        loaded: state.loaded
    })
);


// Search data selector
export const selectSearchData = createSelector(
    selectBranchSearch,
    ({ searchData }: BranchSearchState) => {

        if (!searchData)
            return searchData; // null

        return {
            ...searchData,
            tableFormatData: new LocalDataSource(
                searchData.results.map(row => ({
                    ifsc: row.ifsc,
                    branch: row.branch,
                    address: row.address,
                    city: row.city,
                    district: row.district,
                    state: row.state,
                    bank_id: row.bank_id
                }))
            )
        }


    }
)

