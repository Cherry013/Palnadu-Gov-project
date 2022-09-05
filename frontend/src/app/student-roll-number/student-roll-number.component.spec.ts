import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentRollNumberComponent } from './student-roll-number.component';

describe('StudentRollNumberComponent', () => {
  let component: StudentRollNumberComponent;
  let fixture: ComponentFixture<StudentRollNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentRollNumberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentRollNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
