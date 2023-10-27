import { Component, Input } from '@angular/core';

interface SidebarNav {
  header: string,
  navLinks: {title: string, path: string, icon: string}[]
}

@Component({
  selector: 'app-nav-section',
  templateUrl: './nav-section.component.html',
  styleUrls: ['./nav-section.component.css']
})
export class NavSectionComponent {
  @Input() navData!: SidebarNav;
}
