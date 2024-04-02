import { Component, OnInit } from '@angular/core';
import { PostsApiService } from '../../services/posts-api.service';
import { PostInterface } from '../../interfaces/post.inteface';

@Component({
    selector: 'app-posts',
    standalone: true,
    templateUrl: './posts.component.html',
    styleUrl: './posts.component.scss',
    imports: []
})
export class PostsComponent implements OnInit {

  postsList: PostInterface[]=[];
  post: PostInterface = {
    id: 0,
    userId: 0,
    title: '',
    body: ''
  }
  constructor(private postApiService: PostsApiService) {}

  ngOnInit(): void {
    this.getPosts();
  }

  selectedPost(postData: PostInterface){
    this.postsList[0] = postData;
    console.log(postData)
    return postData
    /*this.post.id = postData.id
    console.log(this.post.id);
    this.getPost(this.post.id)*/
  }

  getPosts() {
    this.postApiService.getPosts().subscribe({
      next: (result) => {
        this.postsList = result;
      },
      error: (err) => {
        console.error(err)
      }
    })
  }

  getPost(id: number) {
    console.log("/////////GETPOST/////////");
    this.postApiService.getPost(id).subscribe({
      next: (result) => {
        this.postsList= result;
        console.log(result);
      }
    })
  }

  updatePost(postData: PostInterface){
    this.postApiService.updatePost(postData);
  }

}
