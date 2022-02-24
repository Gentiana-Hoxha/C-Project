import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookCardFormWizardComponent } from './book-card-form-wizard.component';

describe('BookCardFormWizardComponent', () => {
  let component: BookCardFormWizardComponent;
  let fixture: ComponentFixture<BookCardFormWizardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookCardFormWizardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookCardFormWizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
