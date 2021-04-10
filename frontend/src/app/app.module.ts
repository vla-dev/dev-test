import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/*** Ng MATERIAL MODULES ***/
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';

/**** MODULES ****/
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/**** COMPONENTS ****/
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { DataGenerationComponent } from './components/data-generation/data-generation.component';
import { AggregationComponent } from './components/aggregation/aggregation.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    DataGenerationComponent,
    AggregationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
