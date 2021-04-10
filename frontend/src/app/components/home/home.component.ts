import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  handleTabChange(event: { index: number; }) {
    if(event.index === 1){
      this.getAggregationTime();
    }
  }

  generateData() {
    console.log('Generating dummy data...');
  }

  getAggregationTime() {
    console.log('Getting aggregation time...');
  }

}
