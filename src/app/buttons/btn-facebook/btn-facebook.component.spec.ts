import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnFacebookComponent } from './btn-facebook.component';

describe('BtnFacebookComponent', () => {
  let component: BtnFacebookComponent;
  let fixture: ComponentFixture<BtnFacebookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtnFacebookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnFacebookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
