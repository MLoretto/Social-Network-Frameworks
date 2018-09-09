import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnReturnComponent } from './btn-return.component';

describe('BtnReturnComponent', () => {
  let component: BtnReturnComponent;
  let fixture: ComponentFixture<BtnReturnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtnReturnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnReturnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
