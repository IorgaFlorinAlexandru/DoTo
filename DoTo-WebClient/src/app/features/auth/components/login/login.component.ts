import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginModel } from 'src/app/core/models/auth/login-model';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private formBuilder : FormBuilder, private router: Router,private authService: AuthService) { }

  ngOnInit(): void {
  }


  loginGroup: FormGroup=this.formBuilder.group({
    loginUsername: ["",Validators.required],
    loginPassword: ["",Validators.required],
    loginRemember: false 
  });

  login(){
    const loginModel =<LoginModel>{
      userName: this.loginGroup.value.loginUsername,
      password: this.loginGroup.value.loginPassword
    }
    this.authService.login(loginModel).subscribe(
      () => {
        const url = this.authService.lastRoute != undefined ? this.authService.lastRoute : '/home';
        this.router.navigateByUrl(url);
      },
      (error) => {
        console.log(error.error);
      }
    );
  }

  goToRegister(){
      this.router.navigateByUrl("auth/register");
  }

}
