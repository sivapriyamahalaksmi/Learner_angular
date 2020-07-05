import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentbyidComponent } from './studentbyid.component';

describe('StudentbyidComponent', () => {
  let component: StudentbyidComponent;
  let fixture: ComponentFixture<StudentbyidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentbyidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentbyidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
