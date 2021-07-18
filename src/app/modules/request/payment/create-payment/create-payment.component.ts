import { Component, OnInit } from '@angular/core';
import { FormBuilder,  FormGroup,  Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PaymentModel } from 'src/app/models/payment/payment.model';
import { AdminPaymentService } from 'src/app/services/payment/admin-payment.service';

@Component({
  selector: 'app-create-payment',
  templateUrl: './create-payment.component.html',
  styleUrls: ['./create-payment.component.css']
})
export class CreatePaymentComponent implements OnInit {
  payment: PaymentModel;
  aFormGroup: FormGroup;
  file_name: string = 'Subir un archivo...';
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private service: AdminPaymentService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.FormBuilding();
  }

  FormBuilding() {
    this.aFormGroup = this.formBuilder.group({
      name: ['', [Validators.required]],
      date: ['', [Validators.required]],
      image_file: ['', [Validators.required]],
    });
  }

  createPayment() {
    const formData = new FormData();
    formData.append('value', this.aFormGroup.value.name);
    formData.append('image_file', this.aFormGroup.get('image_file').value);
    formData.append(
      'date',
      new Date(this.aFormGroup.value.date).toJSON()
    );
   
    if (this.aFormGroup.invalid) {
      console.log('Invalid form');
    } else {
      this.service.saveNewRecord(formData).subscribe(
        (data) => {
          this.router.navigate(['/payment/']);
        },
        (err) => {
          console.log('invalid data');
        }
      );
    }
  }

  get fgv() {
    return this.aFormGroup.controls;
  }

  onChangeImageFile(event: any) {
    if (event.target.value) {
      this.file_name = event.target.value.match(
        /[\/\\]([\w\d\s\.\-\(\)]+)$/
      )[1];

      this.aFormGroup.get('image_file').setValue(event.target.files[0]);
    } else {
      this.file_name = 'Subir un archivo...';
    }
  }
}
