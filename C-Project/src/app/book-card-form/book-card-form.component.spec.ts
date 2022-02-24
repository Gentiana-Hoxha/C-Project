import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookCardFormComponent } from './book-card-form.component';

describe('BookCardFormComponent', () => {
  let component: BookCardFormComponent;
  let fixture: ComponentFixture<BookCardFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookCardFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookCardFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
