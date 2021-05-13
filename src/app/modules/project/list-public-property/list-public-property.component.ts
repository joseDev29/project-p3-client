import { Component, Input, OnInit } from '@angular/core';
import { PropertyModel } from '../../../models/project/property.model';

@Component({
  selector: 'app-list-public-property',
  templateUrl: './list-public-property.component.html',
  styleUrls: ['./list-public-property.component.css'],
})
export class ListPublicPropertyComponent implements OnInit {
  @Input('properties') properties: PropertyModel[] = [];

  constructor() {}

  ngOnInit(): void {}
}
