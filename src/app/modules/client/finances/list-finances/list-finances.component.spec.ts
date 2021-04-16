import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFinancesComponent } from './list-finances.component';

describe('ListFinancesComponent', () => {
  let component: ListFinancesComponent;
  let fixture: ComponentFixture<ListFinancesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListFinancesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFinancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
