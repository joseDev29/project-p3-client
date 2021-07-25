import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PropertyModel } from 'src/app/models/project/property.model';
import { PublicClientRequestModel } from 'src/app/models/project/public-client-request.model';
import { AdminBlockService } from 'src/app/services/project/block/admin-block.service';
import { AdminPropertyService } from 'src/app/services/project/block/property/admin-property.service';
import { PublicProjectService } from 'src/app/services/project/public-project.service';

@Component({
  selector: 'app-public-client-request',
  templateUrl: './public-client-request.component.html',
  styleUrls: ['./public-client-request.component.css'],
})
export class PublicClientRequestComponent implements OnInit {
  property: PropertyModel;
  propertyId: string;
  aFormGroup: FormGroup;
  model: PublicClientRequestModel;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private projectService: PublicProjectService
  ) {}
  ngOnInit(): void {
    this.propertyId = this.route.snapshot.params['id'];
    this.FormBuilding();
    this.getPropertyData();
  }

  FormBuilding() {
    this.aFormGroup = this.formBuilder.group({
      name: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      email: ['', [Validators.required]],
      phone: ['', [Validators.required]],
    });
  }

  getPropertyData() {
    this.projectService.getPropertyById(this.propertyId).subscribe(
      (property) => (this.property = property),
      (err) => console.log
    );
  }

  sendRequest() {
    if (this.aFormGroup.invalid) {
      alert('Invalid form');
      return;
    }

    this.model = {
      name: this.aFormGroup.value.name,
      lastname: this.aFormGroup.value.lastname,
      email: this.aFormGroup.value.email,
      phone: this.aFormGroup.value.phone,
    };

    console.log('Mdoel:', this.model);

    this.projectService
      .sendPublicRequest(this.propertyId, this.model)
      .subscribe(
        (res) => {
          this.router.navigate([
            '/project/home',
            this.property.block.projectId,
          ]);
        },
        (err) => console.log
      );
  }

  get fgv() {
    return this.aFormGroup.controls;
  }
}
