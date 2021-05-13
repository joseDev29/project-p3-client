import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicBlockSelectorComponent } from './public-block-selector.component';

describe('PublicBlockSelectorComponent', () => {
  let component: PublicBlockSelectorComponent;
  let fixture: ComponentFixture<PublicBlockSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicBlockSelectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicBlockSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
