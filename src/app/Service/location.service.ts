import { Injectable } from '@angular/core';
import{HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  private url="https://developers.zomato.com/api/v2.1/";
 headers= new HttpHeaders({ 'Content-Type': 'application/json' ,'user-key': '8301f7dd6d22fc3f75399fa849e9d123'});

  constructor(private http:HttpClient) { }

  getCategories(): Observable<any>{
  return this.http.get<any>(this.url+"categories",{headers: this.headers});
}
}
