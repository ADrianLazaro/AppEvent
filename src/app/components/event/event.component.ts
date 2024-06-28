import { CommonModule } from '@angular/common';
import { Component,EventEmitter,inject,Input,Output,signal, SimpleChanges } from '@angular/core';
import { RouterLinkWithHref, RouterModule } from '@angular/router';
import { Event } from '../../models/event.model';

@Component({
  selector: 'app-event',
  standalone: true,
  imports: [RouterLinkWithHref, RouterModule, CommonModule,],
  templateUrl: './event.component.html',
  styleUrl: './event.component.css'
})
export class EventComponent {

  @Input() event!:Event;
  constructor(){}


}
