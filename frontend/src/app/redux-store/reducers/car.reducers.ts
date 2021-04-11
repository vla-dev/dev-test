import * as CarsAction from '../actions/cars.actions';
import { Car } from '../models/car.model';

export type Action = CarsAction.All;

const defaultState: Array<Car> = [];

export function carsReducers(state: Array<Car> = defaultState, action: Action) {
    switch(action.type){
        case CarsAction.ADD_CAR: 
            return [...state, action.payload];
        case CarsAction.ADD_CARS: 
            return [...state, ...action.payload];
        default:
            return state
    }
}