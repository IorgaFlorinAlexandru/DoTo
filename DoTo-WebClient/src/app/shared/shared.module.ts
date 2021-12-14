import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskComponent } from './components/task/task.component';
import { TaskCategoryComponent } from './components/task-category/task-category.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TaskProgressListComponent } from './components/task-progress-list/task-progress-list.component';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { ActivitiesListComponent } from './components/activities-list/activities-list.component';
import { QuickNotesComponent } from './components/quick-notes/quick-notes.component';

@NgModule({
  declarations: [
    TaskComponent,
    TaskCategoryComponent,
    TaskProgressListComponent,
    ProjectListComponent,
    ActivitiesListComponent,
    QuickNotesComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    TaskComponent,
    TaskCategoryComponent,
    TaskProgressListComponent,
    ProjectListComponent,
    ActivitiesListComponent,
    QuickNotesComponent
  ]

})
export class SharedModule { }
