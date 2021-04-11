import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Car } from 'src/app/redux-store/models/car.model';
import * as CarsActions from '../../redux-store/actions/cars.actions';
import { ApiService } from 'src/app/services/api.service';
import { CarGeneratorService } from 'src/app/services/car-generator.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  cars: Array<Car> = [];
  aggregatedData: Array<{_id: string, totalPrice: number}> = new Array;
  aggregationTime: string = '';

  constructor(private api: ApiService, private store: Store<any>, private carGenerator: CarGeneratorService) { }

  ngOnInit(): void {
    this.getAllCars();
  }

  handleTabChange(event: { index: number; }) {
    if (event.index === 1) {
      this.getAggregationTime();
    }
  }

  generateData() {
    const newCar: Car = this.carGenerator.newCar();

    this.api.generateData(newCar).subscribe(
      (res: any) => {
        this.store.dispatch(new CarsActions.AddCar(newCar));
        this.updateData();
      },
      err => {
        console.log(err)
        console.error('Cannot add a new entry. Error: ' + err.statusText);
      }
    )
  }

  getAggregationTime() {
    this.api.getAggregationTime().subscribe(
      (res: any) => {
        this.aggregationTime = res.duration;
        this.aggregatedData = res.data;
      },
      err => {
        console.error('Cannot read aggregation time. Error: ', err);
      }
    )
  }

  getAllCars(): void {
    this.api.getCars().subscribe((response: any) => {
      this.store.dispatch(new CarsActions.AddCars(response.cars));
      this.updateData();
    })
  }

  updateData(): void {
    this.store.select('cars').subscribe((cars) => this.cars = cars);
  }

}
