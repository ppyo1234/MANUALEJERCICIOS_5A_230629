import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule,CommonModule],
  templateUrl: './navbar.component.html',
  standalone: true,
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isLoggedIn = true;

  logIn() {
    this.isLoggedIn = true; // Cambia el estado a logueado
  }

  logOut() {
    this.isLoggedIn = false; // Cambia el estado a no logueado
  }
}
