import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PictureDispplayComponent } from './picture-dispplay.component';

describe('PictureDispplayComponent', () => {
  let component: PictureDispplayComponent;
  let fixture: ComponentFixture<PictureDispplayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PictureDispplayComponent]
    });
    fixture = TestBed.createComponent(PictureDispplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
