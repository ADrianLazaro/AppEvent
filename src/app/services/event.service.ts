import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Event } from '../models/event.model';
@Injectable({
 providedIn: 'root'
})
export class EventService {
private httpClient = inject(HttpClient);
 private url = "http://localhost:3000/api/events";

 constructor() { }

 getEvents(){
    return this.httpClient.get<Event[]>(this.url);
 }

 getOne(id:string){
  return this.httpClient.get<Event>(this.url+'/'+id);
 }
}
