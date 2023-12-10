import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { HousingLocationComponent } from 'app/housing-location/housing-location.component';
import { HousingService } from 'app/housing.service';
import { Housinglocation } from 'app/housinglocation';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HousingLocationComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

/**
 * @description HomeComponent is responsible for displaying information about a home.
 */
export class HomeComponent {
  housingLocationList : Housinglocation[] = [];
  housingService : HousingService = inject(HousingService);

  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocations();
  }

}
