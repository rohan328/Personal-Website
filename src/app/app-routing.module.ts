import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnalystDashboardComponent } from './analyst-dashboard/analyst-dashboard.component';

const routes: Routes = [
  { path: 'trading-dashboard', component: AnalystDashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
