import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { finalize, map, mergeMap } from 'rxjs/operators'
import { HttpEndpoints } from '../enums/http-endpoints';
import { HttpMethods } from '../enums/http-methods';
import { LoginModel } from '../models/auth/login-model';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpService: HttpService) { }

  login(loginModel: LoginModel) : Observable<string | null> {
    return this.httpService.makeHttpCall(HttpEndpoints.Login,HttpMethods.POST,loginModel).pipe(
      map(
        (tokenObject) => {
          localStorage.setItem('token', tokenObject.token);
          return localStorage.getItem("token");
        }
      )
    );
  };

  
}
