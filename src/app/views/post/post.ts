export class Post {
    id: number;
    title: string;
    content: string;
    description: string;
}

export class PostResolved {
    post: Post;
    error?: string;
}
