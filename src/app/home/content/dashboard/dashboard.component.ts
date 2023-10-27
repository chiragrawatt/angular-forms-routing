import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  stats = [
    {
      title: "Sales",
      current: "2.382",
      change: -3.65,
      icon: "bi bi-truck"
    },
    {
      title: "Earnings",
      current: "$21.300",
      change: 6.65,
      icon: "bi bi-currency-dollar"
    },
    {
      title: "Visitors",
      current: "14.212",
      change: 5.25,
      icon: "bi bi-people"
    },
    {
      title: "Orders",
      current: "64",
      change: -2.25,
      icon: "bi bi-cart"
    }
  ];
}
