import { Component, OnInit } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';
import { User } from 'src/app/core/models/auth/user';
import { AuthService } from 'src/app/core/services/auth.service';
import { CoreService } from '../../../../services/core.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private coreService : CoreService,private authService: AuthService) { }

  userAuthenticated = false;
  user: User | undefined = undefined;


  ngOnInit(): void {
    this.authService.userAuthenticated.subscribe(
      (emit) => {
        this.userAuthenticated = emit;
        this.user = this.authService.user;
      }
    )
  }

  faBars = faBars;
  faSearch = faSearch;
  faCog = faCog;
  faBell = faBell;
  faEnvelope = faEnvelope;
  faSortDown = faSortDown;

  resizeAsideMenu(){
      this.coreService.asideMenuResized.emit(true);
  }

}
