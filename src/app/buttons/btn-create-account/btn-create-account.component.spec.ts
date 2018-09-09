import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnCreateAccountComponent } from './btn-create-account.component';

describe('BtnCreateAccountComponent', () => {
  let component: BtnCreateAccountComponent;
  let fixture: ComponentFixture<BtnCreateAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtnCreateAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnCreateAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
