import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateFinancesComponent } from './update-finances.component';

describe('UpdateFinancesComponent', () => {
  let component: UpdateFinancesComponent;
  let fixture: ComponentFixture<UpdateFinancesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateFinancesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateFinancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
