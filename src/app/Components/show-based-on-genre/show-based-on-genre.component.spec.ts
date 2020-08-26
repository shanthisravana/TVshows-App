import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowBasedOnGenreComponent } from './show-based-on-genre.component';

describe('ShowBasedOnGenreComponent', () => {
  let component: ShowBasedOnGenreComponent;
  let fixture: ComponentFixture<ShowBasedOnGenreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowBasedOnGenreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowBasedOnGenreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
