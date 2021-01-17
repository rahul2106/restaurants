import { Injectable } from '@angular/core';
import{HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class LocationService {


 headers= new HttpHeaders({ 'Content-Type': 'application/json' ,'user-key': environment.userkey});

  constructor(private http:HttpClient) { }

  getCategories(): Observable<any>{
  return this.http.get<any>(environment.url+"categories",{headers: this.headers});
}

  getLocation(query:string):Observable<any>{
    return this.http.get<any>(environment.url+"locations?query="+query+"&count=10",{headers: this.headers});
  }
}
