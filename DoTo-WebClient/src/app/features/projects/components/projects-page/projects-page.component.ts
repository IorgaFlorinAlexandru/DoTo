import { Component, OnInit } from '@angular/core';
import { ProjectList } from 'src/app/core/models/project-management/project-list';
import { ProjectService } from 'src/app/core/services/project-management-services/project.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

import { faPalette } from '@fortawesome/free-solid-svg-icons';
import { faFlag } from '@fortawesome/free-solid-svg-icons';
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { faHandPaper } from '@fortawesome/free-solid-svg-icons';
import { faTerminal } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss']
})
export class ProjectsPageComponent implements OnInit {

  constructor(private projectService: ProjectService,private modalService: NgbModal) { }

  projects : ProjectList | undefined;
  closeResult = '';

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

  getIcon(icon: string){
    switch(icon){
      case "terminal":
        return faTerminal;
      case "clock":
        return faClock;
      default:
        return faHandPaper;
    }
  }
  
  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then(
    (result) => {
      this.closeResult = `Closed with: ${result}`;
      console.log(this.closeResult);
      },
    (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      console.log(this.closeResult);
    });
  }

  private getDismissReason(reason: ModalDismissReasons): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  faPalette = faPalette;
  faFlag = faFlag;
  faMobileAlt = faMobileAlt;
  faClock = faClock;
  faHandPaper = faHandPaper;
  faTerminal = faTerminal;
  faTimes = faTimes;

}
