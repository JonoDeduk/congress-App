import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftFilterBarComponent } from './left-filter-bar.component';

describe('LeftFilterBarComponent', () => {
  let component: LeftFilterBarComponent;
  let fixture: ComponentFixture<LeftFilterBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftFilterBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftFilterBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
