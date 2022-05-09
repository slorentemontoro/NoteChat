import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradeLocationComponent } from './grade-location.component';

describe('GradeLocationComponent', () => {
  let component: GradeLocationComponent;
  let fixture: ComponentFixture<GradeLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GradeLocationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GradeLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
