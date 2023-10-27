import { Component, Input } from '@angular/core';

interface Stat {
  title: string,
  current: string,
  change: number,
  icon: string
}

@Component({
  selector: 'app-stats-card',
  templateUrl: './stats-card.component.html',
  styleUrls: ['./stats-card.component.css']
})
export class StatsCardComponent {
  @Input() stat!: Stat;
}
