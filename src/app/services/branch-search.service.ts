import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { apiSearchUrl, apiBranchSearchUrl } from '../_consts/api';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private _http: HttpClient) { }

  // Search across ALL fields in database
  getSearchData({searchText, pageSize, city}): Observable<any> {
    return this._http.get<any>(apiSearchUrl+`?q=${searchText}&limit=${pageSize}&city=${city}`)
  }

  // Search by branch field
  getBranchSearchData({searchText, pageSize, city}): Observable<any>{
    return this._http.get<any>(apiBranchSearchUrl + `?q=${searchText}&limit=${pageSize}&city=${city}`)
  }

  fetchPage({pageUrl}): Observable<any> {
    console.log(pageUrl)
    return this._http.get<any>(pageUrl);
  }

}
