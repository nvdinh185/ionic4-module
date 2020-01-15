import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Words2Component } from './words2.component';

describe('Words2Component', () => {
  let component: Words2Component;
  let fixture: ComponentFixture<Words2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Words2Component ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Words2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
