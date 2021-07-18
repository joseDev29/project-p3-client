import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserModel } from 'src/app/models/security/user.model';
import { SecurityService } from 'src/app/services/security.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  aFormGroup: FormGroup;

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
      email: ['', [Validators.required, Validators.email]]
    });
  }

  resetPassword() {
    console.log(this.aFormGroup);
    
    if (this.aFormGroup.invalid) {
      console.log("Invalid form");
    } else {
      let model = this.getLoginData();
      console.log(model);
      
      this.service.resetPassword(model).subscribe(
        data=>{
          console.log(data);
          this.router.navigate(["/security/login"]);
        },
        err=>{
          console.log('invalid data');
          
        }
      )
    }
  }
  getLoginData() {
    let model = {username:''};
    model.username = this.aFormGroup.value.email;
    console.log(model);
    
    return model;
  }
  get fgv() {
    return this.aFormGroup.controls;
  }
}
