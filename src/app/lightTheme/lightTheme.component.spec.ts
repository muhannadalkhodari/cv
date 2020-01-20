/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LightThemeComponent } from './lightTheme.component';

describe('LightThemeComponent', () => {
  let component: LightThemeComponent;
  let fixture: ComponentFixture<LightThemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LightThemeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LightThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
