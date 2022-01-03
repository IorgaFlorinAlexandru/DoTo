import { Component, OnInit } from '@angular/core';
import { faPalette } from '@fortawesome/free-solid-svg-icons';
import { faFlag } from '@fortawesome/free-solid-svg-icons';
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { faHandPaper } from '@fortawesome/free-solid-svg-icons';
import { faTerminal } from '@fortawesome/free-solid-svg-icons';
import { ProjectList } from 'src/app/core/models/project-management/project-list';
import { ProjectService } from 'src/app/core/services/project-management-services/project.service';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss']
})
export class ProjectsPageComponent implements OnInit {

  constructor(private projectService: ProjectService) { }

  projects : ProjectList | undefined;

  ngOnInit(): void {
    this.projectService.getUserProjects().subscribe(
      (response: ProjectList) => {
        this.projects = response;
      },
      (error) => {
        console.log(error);
      }
    )
  }

  getProjectDetails(id: number){
    console.log(id);
  }
  
  faPalette = faPalette;
  faFlag = faFlag;
  faMobileAlt = faMobileAlt;
  faClock = faClock;
  faHandPaper = faHandPaper;
  faTerminal = faTerminal;

}
