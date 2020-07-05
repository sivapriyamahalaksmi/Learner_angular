import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateclassComponent } from './updateclass.component';

describe('UpdateclassComponent', () => {
  let component: UpdateclassComponent;
  let fixture: ComponentFixture<UpdateclassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateclassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
