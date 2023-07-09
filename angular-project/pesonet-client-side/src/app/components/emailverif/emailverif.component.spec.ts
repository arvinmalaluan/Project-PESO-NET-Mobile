import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailverifComponent } from './emailverif.component';

describe('EmailverifComponent', () => {
  let component: EmailverifComponent;
  let fixture: ComponentFixture<EmailverifComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmailverifComponent]
    });
    fixture = TestBed.createComponent(EmailverifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
