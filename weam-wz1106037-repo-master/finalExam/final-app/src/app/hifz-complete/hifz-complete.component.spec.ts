import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HifzCompleteComponent } from './hifz-complete.component';

describe('HifzCompleteComponent', () => {
  let component: HifzCompleteComponent;
  let fixture: ComponentFixture<HifzCompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HifzCompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HifzCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
