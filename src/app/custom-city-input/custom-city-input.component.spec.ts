import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomCityInputComponent } from './custom-city-input.component';

describe('CustomCityInputComponent', () => {
  let component: CustomCityInputComponent;
  let fixture: ComponentFixture<CustomCityInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomCityInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomCityInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
