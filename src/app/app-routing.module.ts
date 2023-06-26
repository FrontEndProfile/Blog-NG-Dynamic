import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ViewPageComponent } from './view-page/view-page.component';
import { TestAnimationComponent } from './test-animation/test-animation.component';
import { CreateDataComponent } from './create-data/create-data.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'view/:id', component: ViewPageComponent },
  { path: 'test', component: TestAnimationComponent },
  { path: 'create', component: CreateDataComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
