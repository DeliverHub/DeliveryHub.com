/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { StorecartComponent } from './storecart.component';

describe('StorecartComponent', () => {
  let component: StorecartComponent;
  let fixture: ComponentFixture<StorecartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StorecartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StorecartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
