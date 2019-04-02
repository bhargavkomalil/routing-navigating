import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCmpComponent } from './view-cmp.component';

describe('ViewCmpComponent', () => {
  let component: ViewCmpComponent;
  let fixture: ComponentFixture<ViewCmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewCmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
