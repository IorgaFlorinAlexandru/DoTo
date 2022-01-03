import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpEndpoints } from '../../enums/http-endpoints';
import { HttpMethods } from '../../enums/http-methods';
import { ProjectList } from '../../models/project-management/project-list';
import { HttpService } from '../http.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private httpService: HttpService) { }

  getUserProjects(){
    return this.httpService.makeHttpCall(HttpEndpoints.GetUserProjects,HttpMethods.GET).pipe(
      map(
        (response: ProjectList) => {
          return response;
        }
      )
    );
  }


}
