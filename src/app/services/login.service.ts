import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
 providedIn: 'root'
})
export class LoginService {
 private userSource = new BehaviorSubject<any>(null);
 currentUser = this.userSource.asObservable();

 constructor() { }

 login(user: any): void {
    this.userSource.next(user);
 }

 logout(): void {
    this.userSource.next(null);
 }
}
