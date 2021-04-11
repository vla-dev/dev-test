import * as CarsAction from '../actions/cars.actions';
import { Car } from '../models/car.model';

export type Action = CarsAction.All;

const defaultState: Array<Car> = [];

export function carsReducers(state: Array<Car> = defaultState, action: CarsAction.AddCar) {
    switch(action.type){
        case CarsAction.ADD_CAR: 
            return [...state, action.payload];
    }
}