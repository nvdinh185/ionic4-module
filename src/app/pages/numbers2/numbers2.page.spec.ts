import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Numbers2Page } from './numbers2.page';

describe('Numbers2Page', () => {
  let component: Numbers2Page;
  let fixture: ComponentFixture<Numbers2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Numbers2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Numbers2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
