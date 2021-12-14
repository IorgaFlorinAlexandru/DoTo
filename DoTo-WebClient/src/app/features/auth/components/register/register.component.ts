import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private formBuilder : FormBuilder, private router: Router) { }

  ngOnInit(): void {
  }

  registerGroup: FormGroup=this.formBuilder.group({
    registerFirstName: ["",Validators.required],
    registerLastName: ["",Validators.required],
    registerEmail: ["",Validators.required],
    registerPassword: ["",Validators.required],
    registerConfirmPass: ["",Validators.required],
    registerTermsCond: false 
  });

  register(){
      console.log(this.registerGroup.value.registerFirstName);
      console.log(this.registerGroup.value.registerLastName);
      console.log(this.registerGroup.value.registerEmail);
      console.log(this.registerGroup.value.registerPassword);
      console.log(this.registerGroup.value.registerConfirmPass);
      console.log(this.registerGroup.value.registerTermsCond);
  }

  goToLogin(){
      this.router.navigateByUrl("auth/login");
  }
}
