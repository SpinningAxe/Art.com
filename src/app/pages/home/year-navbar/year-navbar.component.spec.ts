import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YearNavbarComponent } from './year-navbar.component';

describe('YearNavbarComponent', () => {
  let component: YearNavbarComponent;
  let fixture: ComponentFixture<YearNavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YearNavbarComponent]
    });
    fixture = TestBed.createComponent(YearNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
