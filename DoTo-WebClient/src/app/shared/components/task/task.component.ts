import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../../../core/models/task-management/task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  @Input() task : Task;
  constructor() { }

  ngOnInit(): void {
  }

 
}
