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
  private housingService : HousingService = inject(HousingService);
  filteredLocationList : Housinglocation[] = [];

  filterResults (searchTerm: string) {
    if(!searchTerm) {
      this.filteredLocationList = this.housingLocationList;
      return;
    }
    this.filteredLocationList = this.filteredLocationList.filter((housingLocation) =>
    housingLocation?.city.toLowerCase().includes(searchTerm.toLowerCase())
    || housingLocation?.name.toLowerCase().includes(searchTerm.toLowerCase())
    || String(housingLocation?.id).toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  constructor () {
    this.housingService.getAllHousingLocations().then((housingLocationList : Housinglocation[]) =>
    {
      this.housingLocationList = housingLocationList;
      this.filteredLocationList = housingLocationList;
    }
    )

  }

}
