import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './views/about/about.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { PostModule } from './views/post/post.module';

const routes: Routes = [
  {
    path: 'about',
    component: AboutComponent
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
  imports: [PostModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
