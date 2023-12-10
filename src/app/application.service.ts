import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {
  submitApplication(firstName: string, lastName: string, email:string) {
    console.log(`Homes application recevied: firstName : ${firstName}, Lastname: ${lastName}, email: ${email}`)
  }
  constructor() { }
}
