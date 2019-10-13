import { Injectable } from '@angular/core';
import { observable, of, Observable } from 'rxjs';
import { map, delay } from 'rxjs/operators';
import { Post } from './post';
import { Posts } from './mock-posts';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor() { }

  getPosts(): Observable<Post[]> {
    return of(Posts);
  }

  getPost(id: number | string): any {
    return this.getPosts().pipe(
      map((posts: Post[]) => posts.find(p => p.id === + id)), delay(3000)
    );
  }
}
