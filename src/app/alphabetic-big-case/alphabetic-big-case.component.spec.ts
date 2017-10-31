import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlphabeticBigCaseComponent } from './alphabetic-big-case.component';

describe('AlphabeticBigCaseComponent', () => {
  let component: AlphabeticBigCaseComponent;
  let fixture: ComponentFixture<AlphabeticBigCaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlphabeticBigCaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlphabeticBigCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
