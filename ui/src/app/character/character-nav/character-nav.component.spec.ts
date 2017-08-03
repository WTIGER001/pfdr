import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterNavComponent } from './character-nav.component';

describe('CharacterNavComponent', () => {
  let component: CharacterNavComponent;
  let fixture: ComponentFixture<CharacterNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
