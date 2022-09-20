import { Component, forwardRef, Provider } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const CUSTOM_SELECT_VALUE_ACCESSOR: Provider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CustomCityInputComponent),
  multi: true,
};

interface Location {
  city: string;
  state: string;
  id: number;
}

@Component({
  selector: 'app-custom-city-input',
  templateUrl: './custom-city-input.component.html',
  styleUrls: ['./custom-city-input.component.scss'],
  providers: [CUSTOM_SELECT_VALUE_ACCESSOR],
})
export class CustomCityInputComponent implements ControlValueAccessor {
  selectedCityId!: number;
  CITY_LIST: Array<Location> = [
    {
      id: 1,
      city: 'Rajkot',
      state: 'Gujarat',
    },
    { id: 2, city: 'Ahemdabad', state: 'Gujarat' },
    { id: 3, city: 'Surat', state: 'Gujarat' },
    {
      id: 4,
      city: 'Vadodara',
      state: 'Gujarat',
    },
  ];
  selectedLocation!: Location;

  private onTouched!: Function;
  private onChange!: Function;

  constructor() {}

  selectedCityAndState(selectedLocation: Location): void {
    if (this.onTouched) this.onTouched();

    this.selectedCityId = selectedLocation.id;
    this.selectedLocation = selectedLocation;

    if (this.onChange) this.onChange(selectedLocation);
  }

  registerOnChange(onChangeFn: Function): void {
    this.onChange = onChangeFn;
  }

  registerOnTouched(onTouchedFn: Function): void {
    this.onTouched = onTouchedFn;
  }

  writeValue(obj: Location): void {
    this.selectedCityId = obj ? obj.id : 0; // reset selection for Id
    this.selectedLocation = obj ?? {
      city: '',
      state: '',
      id: null,
    };
  }
}
