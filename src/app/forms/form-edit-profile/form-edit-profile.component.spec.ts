import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEditProfileComponent } from './form-edit-profile.component';

describe('FormEditProfileComponent', () => {
  let component: FormEditProfileComponent;
  let fixture: ComponentFixture<FormEditProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormEditProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormEditProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
