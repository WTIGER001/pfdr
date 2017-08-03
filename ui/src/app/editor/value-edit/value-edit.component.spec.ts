import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValueEditComponent } from './value-edit.component';

describe('ValueEditComponent', () => {
  let component: ValueEditComponent;
  let fixture: ComponentFixture<ValueEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValueEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValueEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
