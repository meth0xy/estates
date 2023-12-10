import { Injectable } from '@angular/core';
import { Housinglocation } from './housinglocation';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  constructor() { }

  readonly baseUrl = 'http://localhost:3000/locations';

  async getAllHousingLocations() : Promise<Housinglocation[]> {
    try {
      const response = await fetch(this.baseUrl);
      const data = response.json();
      return data ?? [];
    } catch (error) {
      console.error(error);
    }
    return [];
  }

  async getHousingLocationById(id: number) : Promise<Housinglocation | undefined> {
    try {
      const response = await fetch(`${this.baseUrl}/${id}`);
      const data = await response.json()
      return data ?? {}
    } catch (error) {
      console.error(error)
    }
    return undefined;
  }
}
