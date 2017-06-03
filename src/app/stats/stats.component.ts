import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';

import { Stats } from './stats.model';
import { STATS } from './mock-stats';
import { ServerApiService } from '../server-api.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {
  stats: Stats;

  constructor(private apiService: ServerApiService) { }

  ngOnInit() {
    this.stats = STATS;
    this.apiService.getStats()
      .subscribe(
        (data) => {
          this.stats = data;
        },
        (error) => console.log(error)
      );
  }

}
