import { Component, OnInit } from '@angular/core';
import { faTerminal } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faCoins } from '@fortawesome/free-solid-svg-icons';
import { faRunning } from '@fortawesome/free-solid-svg-icons';
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  faTerminal = faTerminal;
  faCoins = faCoins;
  faRunning = faRunning;
  faMobileAlt = faMobileAlt;
  faEye = faEye;
}
