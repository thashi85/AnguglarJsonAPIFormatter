import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonAPIFormatComponent } from './json-apiformat.component';

describe('JsonAPIFormatComponent', () => {
  let component: JsonAPIFormatComponent;
  let fixture: ComponentFixture<JsonAPIFormatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsonAPIFormatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsonAPIFormatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
