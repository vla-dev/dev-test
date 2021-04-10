import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Store } from '@ngrx/store';
import * as AuthActions from '../../redux-store/actions/auth.actions';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, 
    private authService: AuthService, 
    private store: Store<any>,
    public router: Router) {

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

  ngOnInit(): void {}

  hasCorrectCredentials(inputUsername: string, inputPassword: string): boolean {
    const {username, password} =  this.authService.credentials;

    return (inputUsername === username && inputPassword === password);
  }

  doLogin(): void {
    if(!this.loginForm.valid)
      return;

    const {username, password} = this.loginForm.value;
    const loginSuccess = this.hasCorrectCredentials(username, password);

    if(loginSuccess){
      this.store.dispatch(new AuthActions.AddUser({
          username,
          lastLogin: Date.now()
      }));
      
      this.loginForm.reset();
      this.router.navigate(['/']);
    }else{
      console.log('login failed')
    }
  }
}
