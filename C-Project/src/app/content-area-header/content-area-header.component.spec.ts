import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentAreaHeaderComponent } from './content-area-header.component';

describe('ContentAreaHeaderComponent', () => {
  let component: ContentAreaHeaderComponent;
  let fixture: ComponentFixture<ContentAreaHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentAreaHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentAreaHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
