import { Component, OnInit  } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button'
import { NavbarComponent } from "./components/navbar/navbar.component";
import { AppSidebarComponent } from './components/sidebar/app-sidebar.component';
import { AppPageContentComponent } from './components/page-content/app-page-content.component';
import { CommonModule } from '@angular/common'; // Importar CommonModule
import { FormsModule } from '@angular/forms'; // Para usar [(ngModel)]
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatButtonModule, NavbarComponent,AppSidebarComponent, AppPageContentComponent,CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  isAuthenticated = true; // Inicialmente autenticado
  title = 'ManualEjercicios_5A_230629';
  isSidebarOpen = true;
  
  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.isAuthenticated.subscribe(status => {
      this.isAuthenticated = status;
    });
  }

  // Método para iniciar sesión
  login() {
    this.authService.login(); // Cambia el estado de autenticación a true
  }



  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}
