import { Component, OnInit } from '@angular/core';
import { Task } from '../../../../core/models/task-management/task';
import { TaskCategory } from '../../../../core/models/task-management/task-category';
import { faTerminal } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  inProgress  = [ 
      <Task>{ Title : 'Choose design for project page', Priority : "high-priority"},
      <Task>{ Title : 'Create api controller to save task', Priority : "medium-priority"},
      <Task>{ Title : 'Get bearer token from api', Priority : "medium-priority"}, ];
  inReview = [ 
      <Task>{ Title : 'Fix bug when saving task', Priority : "high-priority"},
      <Task>{ Title : 'Setup login interface', Priority : "medium-priority"},
      <Task>{ Title : 'Create new profile page', Priority : "low-priority"}, ];
  completedList = [ 
      <Task>{ Title : 'I have finished lists', Priority : "high-priority",IsCompleted : true},
      <Task>{ Title : 'Destroy table', Priority : "low-priority", IsCompleted : true},
      <Task>{ Title : 'Create task design', Priority : "low-priority", IsCompleted : true} ];
 
  personalCategory = <TaskCategory> {
      Title : 'Personal',
      Icon : 'f120',
      InProgressList : this.inProgress,
      InReviewList : this.inReview,
      CompletedList : this.completedList
  }
}
