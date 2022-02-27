import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksContentAreaComponent } from './books-content-area.component';

describe('BooksContentAreaComponent', () => {
  let component: BooksContentAreaComponent;
  let fixture: ComponentFixture<BooksContentAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BooksContentAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksContentAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
