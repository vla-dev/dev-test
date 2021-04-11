import { Action } from '@ngrx/store';
import { Car } from '../models/car.model';

export const ADD_CAR = 'ADD_CAR';
export const ADD_CARS = 'ADD_CARS';

export class AddCar implements Action {
    readonly type = ADD_CAR;

    constructor(public payload: Car) {}
}

export class AddCars implements Action {
    readonly type = ADD_CARS;

    constructor(public payload: Array<Car>) {}
}

export type All = AddCar | AddCars;