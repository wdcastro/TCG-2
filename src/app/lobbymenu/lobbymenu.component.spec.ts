import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LobbymenuComponent } from './lobbymenu.component';

describe('LobbymenuComponent', () => {
  let component: LobbymenuComponent;
  let fixture: ComponentFixture<LobbymenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LobbymenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LobbymenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
