import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from 'app/housing.service';
import { Housinglocation } from 'app/housinglocation';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms'
import { ApplicationService } from 'app/application.service';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {
  private route: ActivatedRoute = inject(ActivatedRoute);
  private housingService = inject(HousingService);
  private appliactionService = inject(ApplicationService);
  housingLocation?:Housinglocation;

  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName : new FormControl(''),
    email: new FormControl(''),
  });

  submitApplication () {
    this.appliactionService.submitApplication(this.applyForm.value.firstName || '', this.applyForm.value.lastName || '', this.applyForm.value.email || '')
  }
  constructor() {
    const housingId = Number(this.route.snapshot.params['id']);
    this.housingService.getHousingLocationById(housingId).then((locationById) =>  {
      this.housingLocation = locationById;
    })
  }

}
