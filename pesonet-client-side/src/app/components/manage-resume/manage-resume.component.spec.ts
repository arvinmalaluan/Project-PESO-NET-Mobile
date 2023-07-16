import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageResumeComponent } from './manage-resume.component';

describe('ManageResumeComponent', () => {
  let component: ManageResumeComponent;
  let fixture: ComponentFixture<ManageResumeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManageResumeComponent]
    });
    fixture = TestBed.createComponent(ManageResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
