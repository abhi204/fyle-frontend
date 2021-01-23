import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { Store, select } from "@ngrx/store";
import { BranchSearchActionTypes as ActionTypes } from "../root-store/bank-store";
import * as selectors from "../root-store/bank-store/selectors";
import * as models from "../root-store/bank-store/models";
import { Observable, Subject } from 'rxjs';
// import { ApiCallStatus } from '../../_models';
import { filter, debounceTime, distinctUntilChanged, tap } from 'rxjs/operators';
@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.css']
})
export class BankComponent implements OnInit {
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

  data = [
    {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz"
    },
    {
      id: 2,
      name: "Ervin Howell",
      username: "Antonette",
      email: "Shanna@melissa.tv"
    },
    
    // ... list of items
    
    {
      id: 11,
      name: "Nicholas DuBuque",
      username: "Nicholas.Stanton",
      email: "Rey.Padberg@rosamond.biz"
    }
  ];

  searchText: string;
  pageSize: number = 20;
  searchTextUpdate$ = new Subject<string>();
  searchResult$: Observable<models.BranchSearch>;
  callStatus$: Observable<any>;


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

  doSearch() {
    if(this.pageSize <= 0){
      window.alert("Please enter a valid page size!")
      return;
    }
    
    if (this.searchText)
      this.store.dispatch({
        type: ActionTypes.LOAD_BRANCH_SEARCH,
        payload: {
          searchText: this.searchText,
          pageSize: this.pageSize
        }
      });
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
