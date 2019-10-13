import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostListComponent } from './post-list/post-list.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostResolver } from './post-resolver';

const routes: Routes = [
  {
    path: 'posts',
    component: PostListComponent
  },
  {
    path: 'posts/:id',
    component: PostDetailComponent,
    resolve: {
      resolveData : PostResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
