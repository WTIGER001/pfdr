import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbilityScoreEditorComponent } from './ability-score-editor.component';

describe('AbilityScoreEditorComponent', () => {
  let component: AbilityScoreEditorComponent;
  let fixture: ComponentFixture<AbilityScoreEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbilityScoreEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbilityScoreEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
