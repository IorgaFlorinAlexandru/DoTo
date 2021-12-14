import { Component, OnInit, Input } from '@angular/core';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { faFlagCheckered } from '@fortawesome/free-solid-svg-icons';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faTerminal } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Task } from '../../../core/models//task-management/task';
import { TaskCategory } from '../../../core/models//task-management/task-category';


@Component({
  selector: 'app-task-category',
  templateUrl: './task-category.component.html',
  styleUrls: ['./task-category.component.scss']
})
export class TaskCategoryComponent implements OnInit {

  @Input() category : TaskCategory;
  constructor() { }

  ngOnInit(): void {
  }

  faClock = faClock;
  faFlagCheckered = faFlagCheckered;
  faFileAlt =faFileAlt;
  faCheck = faCheck;
  faTerminal = faTerminal;
  faPlus = faPlus;


  createTask(){
      console.log("Creating task");
  }


}
