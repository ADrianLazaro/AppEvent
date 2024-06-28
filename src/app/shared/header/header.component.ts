import { Component, inject, Input, OnInit, signal } from '@angular/core';
import { UserService } from '../../services/user.service';
import { FormsModule } from '@angular/forms';
import { User } from '../../models/user.model';

////
import { OidcSecurityService } from 'angular-auth-oidc-client';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  private userService=inject(UserService);
  userLogin = signal<User|any>(null);
  email: string='';
  password: string='';


  onSubmit(email: string, password: string) {
    console.log(email,password);
    this.userService.login(email, password).subscribe(
       data => {
         console.log('Inicio de sesión exitoso:', data);
       },
       error => {
         console.error('Error en el inicio de sesión:', error);
       }
    );
   }

   ///

  constructor(public oidcSecurityService: OidcSecurityService) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  signIn() {
    this.oidcSecurityService.authorize();
  }

  signOut() {
    this.oidcSecurityService.logoff().subscribe((result) => {
      console.log('app sign-out', result);
    });
  }
}
