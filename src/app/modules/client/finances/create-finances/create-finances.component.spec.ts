import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFinancesComponent } from './create-finances.component';

describe('CreateFinancesComponent', () => {
  let component: CreateFinancesComponent;
  let fixture: ComponentFixture<CreateFinancesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateFinancesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateFinancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
