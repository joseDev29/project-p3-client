import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserModel } from 'src/app/models/security/user.model';
import { SecurityService } from 'src/app/services/security.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  aFormGroup: FormGroup;
  siteKey: string = "6Ld82rUaAAAAADClZJM_zrevgGNuvftnwEFdF8_2";

  constructor(
    private formBuilder: FormBuilder,
    private service: SecurityService,
    private route: ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.FormBuilding();
  }

  FormBuilding() {
    this.aFormGroup = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      recaptcha: ['', [Validators.required]]
    });
  }

  LoginUser() {
    console.log(this.aFormGroup);
    
    if (this.aFormGroup.invalid) {
      console.log("Invalid form");
    } else {
      let model = this.getLoginData();
      console.log(model);
      
      this.service.loginUser(model).subscribe(
        data=>{
          console.log(data);
          
          let response=this.service.saveSession(data);
          this.router.navigate(["/home"]);
        },
        err=>{
          console.log('invalid data');
          
        }
      )
    }
  }
  getLoginData() {
    let model = new UserModel();
    model.username = this.aFormGroup.value.email;
    model.password = this.aFormGroup.value.password;
    console.log(model);
    
    return model;
  }
  get fgv() {
    return this.aFormGroup.controls;
  }
}
