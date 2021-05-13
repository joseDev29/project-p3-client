import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPublicPropertyComponent } from './list-public-property.component';

describe('ListPublicPropertyComponent', () => {
  let component: ListPublicPropertyComponent;
  let fixture: ComponentFixture<ListPublicPropertyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPublicPropertyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPublicPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
