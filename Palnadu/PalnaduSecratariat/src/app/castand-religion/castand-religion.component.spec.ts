import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CastandReligionComponent } from './castand-religion.component';

describe('CastandReligionComponent', () => {
  let component: CastandReligionComponent;
  let fixture: ComponentFixture<CastandReligionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CastandReligionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CastandReligionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
