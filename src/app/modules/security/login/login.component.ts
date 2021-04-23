import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  aFormGroup: FormGroup;
  siteKey:string="6Ld82rUaAAAAADClZJM_zrevgGNuvftnwEFdF8_2";
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.FormBuilding();
  }
  
  FormBuilding() {
    this.aFormGroup = this.formBuilder.group({
      
      recaptcha: ['', [Validators.required]]
    });
  }

}
