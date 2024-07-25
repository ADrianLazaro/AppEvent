import { Component, inject, Input, OnInit, signal } from '@angular/core';
import { UserService } from '../../services/user.service';
import { FormsModule } from '@angular/forms';
import { User } from '../../models/user.model';

////
import { OidcSecurityService } from 'angular-auth-oidc-client';
import type { UserInfoResponse } from '@logto/js';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  // isAuthenticated = false;
  // userData?: UserInfoResponse;
  // idToken?: string;
  // accessToken?: string;
  // constructor(public oidcSecurityService: OidcSecurityService) {}
  ///
  private userService=inject(UserService);
  userLogin = signal<User|any>(null);
  email: string='';
  password: string='';

  onSubmit(email: string, password: string) {
    this.userService.login(email, password).subscribe(
       data => {
         console.log('Inicio de sesión exitoso:', data);
         this.userService.userLogin=data;
       },
       error => {
         console.error('Error en el inicio de sesión:', error);
       }
    );
   }

   ///
   ngOnInit(): void {
  //   this.oidcSecurityService
  //     .checkAuth()
  //     .subscribe(({ isAuthenticated, userData, idToken, accessToken }) => {
  //       console.log('app authenticated', isAuthenticated, userData);
  //       this.isAuthenticated = isAuthenticated;
  //       this.userData = userData;
  //       this.idToken = idToken;
  //       this.accessToken = accessToken;
  //     });
    }

  // signIn() {
  //   this.oidcSecurityService.authorize();
  // }

  // signOut() {
  //   this.oidcSecurityService.logoff().subscribe((result) => {
  //     console.log('app sign-out', result);
  //   });
  // }
}
