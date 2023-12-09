import { Component } from '@angular/core';
import { HousingLocationComponent } from 'app/housing-location/housing-location.component';
import { Housinglocation } from 'app/housinglocation';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HousingLocationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

/**
 * @description HomeComponent is responsible for displaying information about a home.
 */
export class HomeComponent {
  readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';
  housingLocation: Housinglocation = {
    id: 9999,
    name: 'Test Home',
    city: 'Test city',
    state: 'ST',
    photo: `${this.baseUrl}/example-house.jpg`,
    availableUnits: 99,
    wifi: true,
    laundry: false,
  };
}
