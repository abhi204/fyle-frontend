import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { apiBranchSearchUrl } from '../_consts/api';

@Injectable({
  providedIn: 'root'
})
export class BranchSearchService {

  constructor(private _http: HttpClient) { }

  getBranchSearchData({searchText, pageSize}): Observable<any> {
    return this._http.get<any>(apiBranchSearchUrl+`?q=${searchText}&limit=${pageSize}`)
  }

  fetchPage({pageUrl}): Observable<any> {
    console.log(pageUrl)
    return this._http.get<any>(pageUrl);
  }

}
