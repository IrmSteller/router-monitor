import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ServiceTarget } from '../models/ServiceTarget';
import { Injectable } from '@angular/core';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})

export class RouterService {
  private routerUrl: string = 'https://localhost:5001/api/';
  private registerUrl: string ="";
  private connected: boolean;
  constructor(private http: HttpClient) { }

  getServiceTargets(): Observable<ServiceTarget[]>{
    return this.http.get<ServiceTarget[]>(this.routerUrl);
    
  }
  
  registerClient():Observable<boolean>{
    return this.http.post<boolean>(this.registerUrl ,{title: "hans", name: 'werner'});    
  }

}
