import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListHomeProjectComponent } from './list-home-project.component';

describe('ListHomeProjectComponent', () => {
  let component: ListHomeProjectComponent;
  let fixture: ComponentFixture<ListHomeProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListHomeProjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListHomeProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
