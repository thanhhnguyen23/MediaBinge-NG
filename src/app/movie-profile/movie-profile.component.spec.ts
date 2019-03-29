import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieProfileComponent } from './movie-profile.component';

describe('MovieProfileComponent', () => {
  let component: MovieProfileComponent;
  let fixture: ComponentFixture<MovieProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
