import { CommonModule } from '@angular/common';

import { Component, computed, inject, Input, signal } from '@angular/core';
import { EventService } from '../../services/event.service';
import { Event } from '../../models/event.model';
import { EventComponent } from '../event/event.component';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-event-detail',
  standalone: true,
  imports: [CommonModule,EventComponent],
  templateUrl: './event-detail.component.html',
  styleUrl: './event-detail.component.css'
})
export class EventDetailComponent {

  @Input() id?:string;
  event= signal<Event|any>(null);
  userLogin=signal<User|null>(null);
  private eventService=inject(EventService);
  private userService = inject(UserService);

  cantTicket= signal(0);
  showText = signal(false);
  total = signal(0);
  constructor(){

  }
  ngOnInit(){
    this.userLogin.set(this.userService.getUserLogin());
    console.log(this.userLogin,"hoasdasd");
    if(this.id){
      this.eventService.getOne(this.id).subscribe({
        next:(ev)=>{
          this.event.set(ev);
        }
      })
    }

  }

  decrement(){
    let total;
    if (this.cantTicket() > 0) {
      this.cantTicket.update(v => v-1);
      total= this.cantTicket()*this.event()?.price;
      this.total.set(total);
    }

    if(this.cantTicket()==0){
      this.showText.set(false);
    }
  }

  increment(){
    let total;
    this.cantTicket.update(v=>v+1);
    if(this.cantTicket()>0){
      this.showText.set(true);
      total= this.cantTicket()*this.event()?.price;
      this.total.set(total);
    }
  }

  BuyTicket(){
    console.log(this.userLogin);
  }


}
