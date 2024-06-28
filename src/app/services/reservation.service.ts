import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Reservation } from '../models/reservation.model';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private httpClient = inject(HttpClient);
  url= "http://localhost:3000/api/reservations";
  constructor() { }

  getReservations(){
    return this.httpClient.get<Reservation[]>(this.url);
  }
}
