import { CommonModule } from '@angular/common';
import { Component,inject,signal, SimpleChanges } from '@angular/core';
import { RouterLinkWithHref, RouterModule } from '@angular/router';
import { HeaderComponent } from '../../shared/header/header.component';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';
import { ReservationService } from '../../services/reservation.service';
import { EventService } from '../../services/event.service';
import { Reservation } from '../../models/reservation.model';
import { Event } from '../../models/event.model';
import { EventComponent } from '../event/event.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [EventComponent,RouterLinkWithHref, HeaderComponent, RouterModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  user = signal<User[]>([]);
  reservation = signal<Reservation[]>([]);
  event = signal<Event[]>([]);

  private _userService = inject(UserService);
  private _reservationService = inject(ReservationService);
  private _eventService = inject(EventService);


  constructor(){}

  ngOnInit(){
    this.getUsers();
    this.getReservations();
    this.getEvents();
  }

  getEvents() {
    this._eventService.getEvents()
    .subscribe({
      next: data =>{
        this.event.set(data);
      },
      error: error => {console.log(error)}
    })
  }
  getReservations() {
    this._reservationService.getReservations()
    .subscribe({
      next: data =>{
        this.reservation.set(data);
      },
      error: error => {console.log(error)}
    })
  }

  private getUsers() {
    this._userService.getUsers()
    .subscribe({
      next: data =>{
        this.user.set(data);
      },
      error: error => {console.log(error)}
    })
  }
}
