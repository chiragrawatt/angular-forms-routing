import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  navData = [
    {
      header: "Pages",
      navLinks: [
        {
          title: "Dashboard",
          path: "dashboard",
          icon: "bi bi-sliders2-vertical"
        },
        {
          title: "Sign In",
          path: "/signin",
          icon: "bi bi-person"
        },
        {
          title: "Sign Up",
          path: "/signup",
          icon: "bi bi-box-arrow-in-right"
        }
      ]
    },
    {
      header: "User",
      navLinks: [
        {
          title: "View",
          path: "user/view",
          icon: "bi bi-people"
        },
        {
          title: "Create",
          path: "user/add",
          icon: "bi bi-person-add"
        }
      ]
    }
  ]
}
