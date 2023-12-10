import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from 'app/housing.service';
import { Housinglocation } from 'app/housinglocation';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {
  private route: ActivatedRoute = inject(ActivatedRoute);
  private housingService = inject(HousingService);
  housingLocation?:Housinglocation;

  constructor() {
    const housingId = Number(this.route.snapshot.params['id']);
    this.housingLocation = this.housingService.getHousingLocationById(housingId);
  }
}
