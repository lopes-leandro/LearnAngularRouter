import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './views/about/about.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { PostModule } from './views/post/post.module';
import { DashboardModule } from './views/dashboard/dashboard.module';

const routes: Routes = [
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'dash',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: '',
    redirectTo: '/posts',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [PostModule, DashboardModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
