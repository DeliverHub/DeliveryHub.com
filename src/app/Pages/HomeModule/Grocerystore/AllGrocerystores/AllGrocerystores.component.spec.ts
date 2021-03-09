/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AllGrocerystoresComponent } from './AllGrocerystores.component';

describe('AllGrocerystoresComponent', () => {
  let component: AllGrocerystoresComponent;
  let fixture: ComponentFixture<AllGrocerystoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllGrocerystoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllGrocerystoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
