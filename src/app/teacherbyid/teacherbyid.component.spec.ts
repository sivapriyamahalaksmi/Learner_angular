import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherbyidComponent } from './teacherbyid.component';

describe('TeacherbyidComponent', () => {
  let component: TeacherbyidComponent;
  let fixture: ComponentFixture<TeacherbyidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherbyidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherbyidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
