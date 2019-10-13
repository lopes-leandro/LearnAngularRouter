import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Post, PostResolved } from './post';
import { Observable, of } from 'rxjs';
import { PostService } from './post.service';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostResolver implements Resolve<PostResolved> {

  constructor(private postService: PostService) { }

  resolve(route: ActivatedRouteSnapshot, _state: RouterStateSnapshot): Observable<PostResolved> | Promise<PostResolved> {
    const id = route.paramMap.get('id');
    if (isNaN(+id)) {
      const message = `id não é um número ${id}`;
      console.error(message);
      return of({ post: null, error: message });
    }
    return this.postService.getPost(+id).pipe(
      map(post => ({ post })),
      catchError(err => {
        const message = `Unable to load posts`;
        console.error(message);
        return of({ post: null, error: message });
      })
    );
  }

}
