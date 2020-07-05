import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassbyidComponent } from './classbyid.component';

describe('ClassbyidComponent', () => {
  let component: ClassbyidComponent;
  let fixture: ComponentFixture<ClassbyidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassbyidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassbyidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
