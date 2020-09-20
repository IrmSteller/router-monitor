import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ServiceTarget } from '../models/ServiceTarget';
import { Injectable } from '@angular/core';
import { Config } from '../models/Config';


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
  private registerUrl: string ='https://localhost:5001/api/';
  private connected: boolean;
  private config: Config;
  constructor(private http: HttpClient) { }

  getServiceTargets(): Observable<ServiceTarget[]>{
    return this.http.get<ServiceTarget[]>(this.routerUrl);
    
  }
  
  registerClient(){
    return this.http.post(this.registerUrl ,this.config, httpOptions).toPromise()
    .then(data => {console.log(data)})
    .catch(err => {console.log(err)});
    
  }

  loadConfiguration(){
    return this.http.get<Config>("assets/config.json").subscribe(data => {
      this.config = data;
    });
  }

}
