import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CityModel } from 'src/app/models/parameters/city.model';
import { CountryModel } from 'src/app/models/parameters/country.model';
import { BlockModel } from 'src/app/models/project/block.model';
import { ProjectModel } from 'src/app/models/project/project.model';
import { PropertyModel } from 'src/app/models/project/property.model';
import { CityService } from 'src/app/services/parameters/city.service';
import { CountryService } from 'src/app/services/parameters/country.service';
import { AdminProjectService } from 'src/app/services/project/admin-project.service';
import { AdminBlockService } from 'src/app/services/project/block/admin-block.service';
import { AdminPropertyService } from 'src/app/services/project/block/property/admin-property.service';

@Component({
  selector: 'app-update-property',
  templateUrl: './update-property.component.html',
  styleUrls: ['./update-property.component.css'],
})
export class UpdatePropertyComponent implements OnInit {
  aFormGroup: FormGroup;
  recordId: string = '';
  property: PropertyModel;
  blocks: BlockModel[];
  model: PropertyModel;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private propertyService: AdminPropertyService,
    private blockService: AdminBlockService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.recordId = this.route.snapshot.params['id'];
    this.FormBuilding();
    this.getProperty();
  }

  FormBuilding() {
    this.aFormGroup = this.formBuilder.group({
      number: ['', [Validators.required]],
      description: ['', [Validators.required]],
      value: ['', Validators.required],
      blockId: ['', [Validators.required]],
    });
  }

  getProperty() {
    this.propertyService.getRecordById(this.recordId).subscribe(
      (property) => {
        this.property = property;

        this.fgv.number.setValue(property.number);
        this.fgv.description.setValue(property.description);
        this.fgv.value.setValue(property.value);
        this.fgv.blockId.setValue(property.blockId);

        this.getBlocks();
      },
      (err) => console.log
    );
  }

  getBlocks() {
    this.blockService
      .getBlocksByProjectId(this.property.block.projectId)
      .subscribe(
        (blocks) => (this.blocks = blocks),
        (err) => console.log
      );
  }

  editRecord() {
    if (this.aFormGroup.invalid) {
      alert('Invalid form');
      return;
    }
    this.model = {
      number: this.aFormGroup.value.number,
      description: this.aFormGroup.value.description,
      value: this.aFormGroup.value.value,
      blockId: this.aFormGroup.value.blockId,
    };

    this.propertyService
      .updateRecordById(this.property.id, this.model)
      .subscribe((res) =>
        this.router.navigate([
          '/project/admin/view/',
          this.property.block.projectId,
        ])
      );
  }

  get fgv() {
    return this.aFormGroup.controls;
  }
}
