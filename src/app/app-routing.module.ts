import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstPageComponent } from './modules/portfolio/first-page/first-page.component';

const routes: Routes = [
  { path: 'first-page', component: FirstPageComponent },
  { path: '**', redirectTo: 'first-page', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
