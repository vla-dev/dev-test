import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuardService as AuthGuard } from './services/auth-guard.service';

/* components */
import { AggregationComponent } from './components/aggregation/aggregation.component';
import { DataGenerationComponent } from './components/data-generation/data-generation.component';
import { HomeComponent } from './components/home/home.component';
import { LoginPageComponent } from './components/login-page/login-page.component';

const routes: Routes = [
  { path: 'home', canActivate: [AuthGuard], component: HomeComponent},
  { path: 'data-generation', canActivate: [AuthGuard], component: DataGenerationComponent},
  { path: 'aggregation', canActivate: [AuthGuard], component: AggregationComponent },
  { path: 'login', component: LoginPageComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
