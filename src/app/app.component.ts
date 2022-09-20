import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  JSON = JSON;
  title = 'learn-control-value-accessor';
  name!: string;
  customLocationSelectModel = {
    city: '',
    state: '',
    id: 0,
  };
  onSelectCustomCity($event: { city: string; state: string; id: number }) {
    // detect change in custom input
    console.log('$event', $event);
  }
}
