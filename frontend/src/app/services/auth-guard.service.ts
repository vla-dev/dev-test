import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {
    private authenticated: boolean = false;

    constructor(public auth: AuthService, public router: Router, private store: Store<any>) {
        this.store.select('auth')
             .subscribe((auth) => {
                 this.authenticated = !!(auth && auth.user);
        });
    }

    canActivate(): boolean {
        if (!this.authenticated) 
            this.router.navigate(['login']);

        return this.authenticated;
    }
}