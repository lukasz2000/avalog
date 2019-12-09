import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBookMarkComponent } from './create-book-mark.component';

describe('CreateBookMarkComponent', () => {
  let component: CreateBookMarkComponent;
  let fixture: ComponentFixture<CreateBookMarkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateBookMarkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateBookMarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
