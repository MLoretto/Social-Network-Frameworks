import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMuroComponent } from './form-muro.component';

describe('FormMuroComponent', () => {
  let component: FormMuroComponent;
  let fixture: ComponentFixture<FormMuroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormMuroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormMuroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
