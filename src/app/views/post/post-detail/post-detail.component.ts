import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private router: Router
  ) { }

  post: Post;

  ngOnInit() {
    // console.log(this.route.snapshot.paramMap.get('id'));
    // this.route.params.subscribe(params => {
    //   // console.log(params.id);
    //   this.postService.getPost(params.id).subscribe(post => {
    //     this.post = post;
    //   });
    // });
    this.post = this.route.snapshot.data.resolveData;
  }

  gotoPosts() {
    this.router.navigate(['/posts']);
  }

}
