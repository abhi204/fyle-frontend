import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouriteSliderComponent } from './favourite-slider.component';

describe('FavouriteSliderComponent', () => {
  let component: FavouriteSliderComponent;
  let fixture: ComponentFixture<FavouriteSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavouriteSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavouriteSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
