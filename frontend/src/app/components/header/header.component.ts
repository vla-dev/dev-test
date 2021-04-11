import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  currentUser: string = '';

  constructor(private store: Store<any>) {
    this.store.select('auth').subscribe((auth) => this.currentUser = auth?.user?.username);
  }

  ngOnInit(): void { }

}
