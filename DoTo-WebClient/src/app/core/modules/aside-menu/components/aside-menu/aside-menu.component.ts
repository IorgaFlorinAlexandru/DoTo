import { Component, OnInit } from '@angular/core';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faTasks } from '@fortawesome/free-solid-svg-icons';
import { faFolder } from '@fortawesome/free-solid-svg-icons';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { faAt } from '@fortawesome/free-solid-svg-icons';
import { CoreService } from '../../../../services/core.service';



@Component({
  selector: 'app-aside-menu',
  templateUrl: './aside-menu.component.html',
  styleUrls: ['./aside-menu.component.scss']
})
export class AsideMenuComponent implements OnInit {

  constructor(private coreService : CoreService) { }

  resized = false;

  ngOnInit(): void {
      this.coreService.asideMenuResized.subscribe(
          () => {
              this.resized = !this.resized;
          });
  }

  faBell = faBell;
  faHome = faHome;
  faTasks = faTasks;
  faFolder = faFolder;
  faFileAlt = faFileAlt;
  faCode = faCode;
  faClock = faClock;
  faAt = faAt;
}
