import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { ContentComponent } from '../page/content/content.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-page-container',
  imports: [SidebarComponent, ContentComponent, NavbarComponent, NgClass],
  templateUrl: './page-container.component.html',
  styleUrl: './page-container.component.css'
})
export class PageContainerComponent {
  isSidebarVisible = true;
  toggleSidebar() {
    this.isSidebarVisible = !this.isSidebarVisible;
  }
}
