import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button'
import { NavbarComponent } from "./components/navbar/navbar.component";
import { AppSidebarComponent } from './components/sidebar/app-sidebar.component';
import { AppPageContentComponent } from './components/page-content/app-page-content.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatButtonModule, NavbarComponent,AppSidebarComponent, AppPageContentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ManualEjercicios_5A_230629';
}
