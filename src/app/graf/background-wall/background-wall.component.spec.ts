import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroundWallComponent } from './background-wall.component';

describe('BackgroundWallComponent', () => {
  let component: BackgroundWallComponent;
  let fixture: ComponentFixture<BackgroundWallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackgroundWallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackgroundWallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
