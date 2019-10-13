import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  constructor(private postService: PostService) { }

  posts: Post[];
  ngOnInit() {
    this.fetchPosts();
  }

  fetchPosts() {
    this.postService.getPosts().subscribe(posts => {
      this.posts = posts;
    });
  }

}
