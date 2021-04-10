import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  credentials = {
    username: 'admin',
    password: '123456'
  }
  constructor() {}

  public isAuthenticated(): boolean {
    const authToken = localStorage.getItem('token');
    
    return !!authToken;
  }
}