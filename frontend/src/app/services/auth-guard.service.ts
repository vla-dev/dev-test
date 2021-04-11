import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthService } from './auth.service';
import * as AuthActions from '../redux-store/actions/auth.actions';

@Injectable()
export class AuthGuardService implements CanActivate {
    private authenticated: boolean = false;

    constructor(public auth: AuthService, public router: Router, private store: Store<any>) {
        const authToken = localStorage.getItem('token');
        
        if(authToken){
            const parsedToken = JSON.parse(authToken);
            this.store.dispatch(new AuthActions.AddUser({
                username: parsedToken.username,
                lastLogin: Date.now()
              }));
            this.authenticated = true;
            
        }else{
            this.store.select('auth')
                .subscribe((auth) => {
                    this.authenticated = !!(auth && auth.user);
            });
        }
    }

    canActivate(): boolean {
        if (!this.authenticated) 
            this.router.navigate(['login']);

        return this.authenticated;
    }
}