import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsPageComponent } from './components/projects-page/projects-page.component';
import { ProjectDetailsComponent } from './components/project-details/project-details.component';


@NgModule({
  declarations: [
    ProjectsPageComponent,
    ProjectDetailsComponent
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    FontAwesomeModule
  ]
})
export class ProjectsModule { }
