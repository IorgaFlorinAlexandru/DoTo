import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private formBuilder : FormBuilder, private router: Router) { }

  ngOnInit(): void {
  }


  loginGroup: FormGroup=this.formBuilder.group({
    loginEmail: ["",Validators.required],
    loginPassword: ["",Validators.required],
    loginRemember: false 
  });

  login(){
      console.log(this.loginGroup.value.loginEmail);
      console.log(this.loginGroup.value.loginPassword);
      console.log(this.loginGroup.value.loginRemember);
  }

  goToRegister(){
      this.router.navigateByUrl("auth/register");
  }

}
