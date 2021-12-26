import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpEndpoints } from '../enums/http-endpoints';
import { HttpMethods } from '../enums/http-methods';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private baseUrl ="https://localhost:44321/api"
  private headers = new HttpHeaders({'Access-Control-Allow-Origin':'origin-list'});  

  constructor(private httpClient: HttpClient) { }

  public makeHttpCall(endPoint: HttpEndpoints,method: HttpMethods, body?: any): Observable<any>{
    switch(method){
      case HttpMethods.GET: return this.httpClient.get(`${this.baseUrl}/${endPoint.toString()}`,{headers: this.headers});
      case HttpMethods.POST: return this.httpClient.post(`${this.baseUrl}/${endPoint.toString()}`,body,{headers: this.headers});
      default: throw new Error("Method type is not valid");
    }
  }
}
