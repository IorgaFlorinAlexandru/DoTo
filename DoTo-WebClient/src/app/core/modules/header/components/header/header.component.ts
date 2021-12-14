import { Component, OnInit } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';
import { CoreService } from '../../../../services/core.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private coreService : CoreService) { }

  ngOnInit(): void {
  }

  faBars = faBars;
  faSearch = faSearch;
  faCog = faCog;
  faBell = faBell;
  faEnvelope = faEnvelope;
  faSortDown = faSortDown;

  resizeAsideMenu(){
      this.coreService.resizeAsideMenu();
  }

}
