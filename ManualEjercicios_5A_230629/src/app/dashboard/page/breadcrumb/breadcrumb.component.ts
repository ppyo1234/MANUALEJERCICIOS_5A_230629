import { Router , NavigationEnd, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-breadcrumb',
  imports: [CommonModule, RouterModule],
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.css'
})
export class BreadcrumbComponent {
  breadcrumbs: { label: string; url: string }[] = [];

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.updateBreadcrumb(event.urlAfterRedirects);
      }
    });
  }

  updateBreadcrumb(url: string) {
    const segments = url.split('/').filter((segment) => segment);
    let currentPath = '';

    this.breadcrumbs = segments.map((segment) => {
      currentPath += `/${segment}`;
      return { label: segment, url: currentPath };
    });
  }

  navigateTo(index: number) {
    const targetUrl = this.breadcrumbs[index].url;
    this.breadcrumbs = this.breadcrumbs.slice(0, index + 1);
    this.router.navigateByUrl(targetUrl);
  }
}
