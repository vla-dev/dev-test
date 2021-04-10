import { ActionReducerMap } from '@ngrx/store';
import { Auth } from '../models/auth.model';
import { authReducers } from './auth.reducers';

export interface ReduxStore {
    auth: Auth;
};

export const reducers: ActionReducerMap<ReduxStore, any> = {
    auth: authReducers
};