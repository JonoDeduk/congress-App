import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CongressBoxComponent } from './congress-box.component';

describe('CongressBoxComponent', () => {
  let component: CongressBoxComponent;
  let fixture: ComponentFixture<CongressBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CongressBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CongressBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
