import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { finalize, map, mergeMap } from 'rxjs/operators'
import { HttpEndpoints } from '../enums/http-endpoints';
import { User } from '../models/auth/user';
import { HttpMethods } from '../enums/http-methods';
import { LoginModel } from '../models/auth/login-model';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpService: HttpService) { }


  user: User | undefined = undefined;
  userAuthenticated: EventEmitter<boolean> = new EventEmitter<boolean>();

  lastRoute: string | undefined = undefined;

  login(loginModel: LoginModel) : Observable<User> {
    return this.httpService.makeHttpCall(HttpEndpoints.Login,HttpMethods.POST,loginModel).pipe(
      mergeMap(
        (tokenObject) => {
          localStorage.setItem('token', tokenObject.token);
          return this.getUserProfile();
        }
      )
    );
  };

  getUserProfile(): Observable<User>{
    return this.httpService.makeHttpCall(HttpEndpoints.GetUserProfile,HttpMethods.GET).pipe(
      map(
        (response : User) => {
          this.user = response;
          this.userAuthenticated.emit(true);
          return response;
        }
      )
    );
  }

  logout(){
    this.user = undefined;
    localStorage.removeItem('token');
    this.userAuthenticated.emit(false);  
  }
  
}
