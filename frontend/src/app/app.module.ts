import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/*** Ng MATERIAL MODULES ***/
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

/**** MODULES ****/
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

/**** COMPONENTS ****/
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';

/**** REDUX STORE ****/
import { StoreModule } from '@ngrx/store';
import { reducers } from './redux-store/reducers';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { AuthGuardService } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { ApiService } from './services/api.service';
import { CarGeneratorService } from './services/car-generator.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    StoreModule.forRoot(reducers)
  ],
  providers: [
    AuthService,
    AuthGuardService,
    ApiService,
    CarGeneratorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
