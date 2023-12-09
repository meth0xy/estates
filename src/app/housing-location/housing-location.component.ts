import { Component, Input } from '@angular/core';
import { Housinglocation } from 'app/housinglocation';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [],
  templateUrl: './housing-location.component.html',
  styleUrl: './housing-location.component.scss'
})
export class HousingLocationComponent {
@Input() housingLocation!: Housinglocation;
}