import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { Store, select } from "@ngrx/store";
import { SearchActionTypes as ActionTypes } from "../root-store/bank-store";
import * as selectors from "../root-store/bank-store/selectors";
import * as models from "../root-store/bank-store/models";
import { Observable, Subject } from 'rxjs';
import { filter, debounceTime, distinctUntilChanged, tap } from 'rxjs/operators';
@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.css']
})
export class BankComponent implements OnInit {
  searchText: string;
  pageSize: number = 20;
  searchTextUpdate$ = new Subject<string>();
  searchResult$: Observable<models.BranchSearch>;
  callStatus$: Observable<any>;
  city: string = 'All';
  cities = ['BANGALORE', 'MUMBAI', 'DELHI', 'PUNE', 'CHENNAI', 'KOLKATA']
  searchFilter: string = 'All';
  searchFilters = ['All', 'Branch'];
  

  tableSettings = {
    columns: {
      ifsc: {
        title: 'IFSC'
      },
      branch: {
        title: 'Branch'
      },
      address: {
        title: 'Address'
      },
      city: {
        title: 'City'
      },
      district: {
        title: 'District'
      },
      state: {
        title: 'State',
      },
      bank_id: {
        title: "Bank ID"
      }
    },
    actions: false,
    pager: {
      display: false
    }
  };

  constructor(private store: Store<any>, private router: Router) { }

  ngOnInit(): void {
    this.searchResult$ = this.store.pipe(select(selectors.selectSearchData));
    this.callStatus$ = this.store.pipe(select(selectors.selectCallStatus));

    this.searchTextUpdate$.pipe(
      filter(Boolean),
      debounceTime(600),
      distinctUntilChanged())
      .subscribe(text => {
        this.doSearch();
      });
  }

  selectCity(city){
    this.city = city;
    this.doSearch();
  }

  applyFilter(filter){
    this.searchFilter = filter;
    this.doSearch();
  }

  doSearch() {
    if(this.pageSize <= 0){
      window.alert("Please enter a valid page size!")
      return;
    }
    
    if (!!this.searchText){
      var selectedCity = this.city === 'All' ? '' : this.city;
      var payload = {
        searchText: this.searchText,
        pageSize: this.pageSize,
        city: selectedCity
      }

      if(this.searchFilter==='Branch')
        this.store.dispatch({
          type: ActionTypes.LOAD_BRANCH_SEARCH,
          payload
        })
      else if(this.searchFilter==='All')
        this.store.dispatch({
          type: ActionTypes.LOAD_SEARCH,
          payload
        })
    }
  }
  
  fetchPage(pageUrl){
    if(pageUrl)
      this.store.dispatch({
        type: ActionTypes.LOAD_PAGE,
        payload: {
          pageUrl
        }
      })
  }

}
