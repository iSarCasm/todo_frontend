import { Component, OnInit } from '@angular/core';

import { STATS } from './mock-stats';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {
  stats = STATS;

  constructor() { }

  ngOnInit() {
  }

}
