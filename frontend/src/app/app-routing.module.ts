import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/* components */
import { AggregationComponent } from './components/aggregation/aggregation.component';
import { DataGenerationComponent } from './components/data-generation/data-generation.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'data-generation', component: DataGenerationComponent },
  { path: 'aggregation', component: AggregationComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
