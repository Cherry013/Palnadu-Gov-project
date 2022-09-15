import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalSubmitionComponent } from './final-submition.component';

describe('FinalSubmitionComponent', () => {
  let component: FinalSubmitionComponent;
  let fixture: ComponentFixture<FinalSubmitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinalSubmitionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalSubmitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
