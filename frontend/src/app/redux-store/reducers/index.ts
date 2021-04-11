import { ActionReducerMap } from '@ngrx/store';
import { Auth } from '../models/auth.model';
import { Car } from '../models/car.model';
import { authReducers } from './auth.reducers';
import { carsReducers } from './car.reducers';

export interface ReduxStore {
    auth: Auth;
    cars: Array<Car | any>
};

export const reducers: ActionReducerMap<ReduxStore, any> = {
    auth: authReducers,
    cars: carsReducers
};