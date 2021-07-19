import { Component, Input, OnInit } from '@angular/core';
import { PropertyModel } from 'src/app/models/project/property.model';

@Component({
  selector: 'app-list-property',
  templateUrl: './list-property.component.html',
  styleUrls: ['./list-property.component.css']
})
export class ListPropertyComponent implements OnInit {
  @Input('properties') properties: PropertyModel[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
