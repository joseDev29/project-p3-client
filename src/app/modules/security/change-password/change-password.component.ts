import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserModel } from 'src/app/models/security/user.model';
import { SecurityService } from 'src/app/services/security.service';
import { ChangePasswordModel } from 'src/app/models/security/change-password.model';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css'],
})
export class ChangePasswordComponent implements OnInit {
  aFormGroup: FormGroup;
  sessionData: UserModel;

  constructor(
    private formBuilder: FormBuilder,
    private service: SecurityService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.FormBuilding();
    this.getSessionData();
  }

  FormBuilding() {
    this.aFormGroup = this.formBuilder.group({
      currentPassword: ['', [Validators.required]],
      newPassword: ['', [Validators.required]],
      newPasswordConfirm: ['', [Validators.required]],
    });
  }

  changePassword() {
    if (
      this.aFormGroup.value.newPassword !==
      this.aFormGroup.value.newPasswordConfirm
    ) {
      alert('Error, las contraseña nueva y la confirmacion no coinciden');
      return;
    }

    if (this.aFormGroup.invalid) {
      console.log('Invalid form');
    } else {
      let model = this.getChangePasswordData();
      console.log(model);

      this.service.changePassword(model).subscribe(
        (res) => {
          this.router.navigate(['/home']);
        },
        (err) => console.log
      );
    }
  }

  getChangePasswordData() {
    let model: ChangePasswordModel = {
      id: this.sessionData.id,
      username: this.sessionData.username,
      currentPassword: this.aFormGroup.value.currentPassword,
      newPassword: this.aFormGroup.value.newPassword,
    };

    console.log(model);

    return model;
  }

  getSessionData() {
    this.service.getUserData().subscribe(
      (data) => (this.sessionData = data),
      (err) => console.log
    );
  }

  get fgv() {
    return this.aFormGroup.controls;
  }
}
