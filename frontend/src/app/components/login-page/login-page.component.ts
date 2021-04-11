import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Store } from '@ngrx/store';
import * as AuthActions from '../../redux-store/actions/auth.actions';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { Auth } from 'src/app/redux-store/models/auth.model';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private authService: AuthService,
    private store: Store<Auth>,
    private router: Router,
    private api: ApiService) {

    this.loginForm = this.formBuilder.group({
      username: ['', Validators.compose([
        Validators.required,
        Validators.maxLength(12)
      ])],
      password: ['', Validators.compose([
        Validators.required,
        Validators.maxLength(12)
      ])]
    });
  }

  get username() { return this.loginForm.get('username'); }
  get password() { return this.loginForm.get('password'); }

  ngOnInit(): void { }

  hasCorrectCredentials(inputUsername: string, inputPassword: string): boolean {
    const { username, password } = this.authService.credentials;

    return (inputUsername === username && inputPassword === password);
  }

  doLogin(): void {
    if (!this.loginForm.valid)
      return;

    const { username, password } = this.loginForm.value;
    const loginSuccess = this.hasCorrectCredentials(username, password);

    if (loginSuccess) {
      //for testing purpose 
      this.byPassMongoConnection();

      this.api.getMongoCnnection().subscribe(
        response => {
          this.store.dispatch(new AuthActions.AddUser({
            username,
            lastLogin: Date.now()
          }));

          this.loginForm.reset();
          this.router.navigate(['/']);
        },
        error => {
          console.log(error.message)
        }
      )
    } else {
      console.log('login failed')
    }
  }

  byPassMongoConnection(): void {
      this.store.dispatch(new AuthActions.AddUser({
        username: 'admin',
        lastLogin: Date.now()
      }));

      this.loginForm.reset();
      this.router.navigate(['/']);
  }
}

