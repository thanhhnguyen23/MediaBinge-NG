import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollapseBasicComponent } from './collapse-basic.component';

describe('CollapseBasicComponent', () => {
  let component: CollapseBasicComponent;
  let fixture: ComponentFixture<CollapseBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollapseBasicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollapseBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
