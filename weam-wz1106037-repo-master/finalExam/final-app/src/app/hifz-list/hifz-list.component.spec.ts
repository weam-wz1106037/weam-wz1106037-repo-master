import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HifzListComponent } from './hifz-list.component';

describe('HifzListComponent', () => {
  let component: HifzListComponent;
  let fixture: ComponentFixture<HifzListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HifzListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HifzListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
