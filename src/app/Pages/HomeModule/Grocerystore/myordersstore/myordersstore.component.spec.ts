/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MyordersstoreComponent } from './myordersstore.component';

describe('MyordersstoreComponent', () => {
  let component: MyordersstoreComponent;
  let fixture: ComponentFixture<MyordersstoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyordersstoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyordersstoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
