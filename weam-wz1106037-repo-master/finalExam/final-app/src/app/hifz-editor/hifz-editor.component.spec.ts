import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HifzEditorComponent } from './hifz-editor.component';

describe('HifzEditorComponent', () => {
  let component: HifzEditorComponent;
  let fixture: ComponentFixture<HifzEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HifzEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HifzEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
