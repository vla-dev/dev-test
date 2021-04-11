import * as AuthActions from '../actions/auth.actions';
import { Auth } from '../models/auth.model';

export type Action = AuthActions.All;

const defaultState: Auth = {
    user: null
}

export function authReducers(state: Auth = defaultState, action: Action) {
    switch(action.type){
        case AuthActions.ADD_USER: 
            return Object.assign({}, state, {user: action.payload});
        default:
            return state
    }
}