import { Component, OnInit } from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { faDoorOpen } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-usermenu',
  templateUrl: './usermenu.component.html',
  styleUrls: ['./usermenu.component.scss']
})
export class UsermenuComponent implements OnInit {

  constructor(private router: Router,private authService: AuthService) { }

  ngOnInit(): void {
  }

  goToProfile(){
      this.router.navigateByUrl("auth/profile");
  }

  logout(){
    this.authService.logout();
  }

  faUser = faUser;
  faCog = faCog;
  faDoorOpen = faDoorOpen;
}
