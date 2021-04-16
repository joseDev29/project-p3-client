import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeListRequestComponent } from './home-list-request.component';

describe('HomeListRequestComponent', () => {
  let component: HomeListRequestComponent;
  let fixture: ComponentFixture<HomeListRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeListRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeListRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
