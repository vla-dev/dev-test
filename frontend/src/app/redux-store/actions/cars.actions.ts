import { Action } from '@ngrx/store';
import { Car } from '../models/car.model';

export const ADD_CAR = 'ADD_CAR';

export class AddCar implements Action {
    readonly type = ADD_CAR;

    constructor(public payload: Car) {}
}

export type All = AddCar;