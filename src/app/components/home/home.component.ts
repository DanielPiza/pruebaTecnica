import { Component, OnInit } from '@angular/core';
import { PostsApiService } from '../../services/posts-api.service';
import { PostInterface } from '../../interfaces/post.inteface';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [FormsModule]
})
export class HomeComponent implements OnInit{
  
  postsList: PostInterface[]=[];

  constructor(private postApiService: PostsApiService){}

  ngOnInit(): void {
    this.getPost(1);
  }

  selectedPost(postData: PostInterface){
    this.postsList[0] = postData;
    /*this.post.id = postData.id
    console.log(this.post.id);
    this.getPost(this.post.id)*/
  }

  getId(){
    var selectedId = document.getElementById("inputID")?.nodeValue;
    console.log(selectedId);
  }

  getPost(id: number){
    this.postApiService.getPost(id).subscribe({
      next: (result) => {
        this.postsList = result;
      },
      error: (err) => {
        console.error(err)
      }
    })
  }

  updatePost(postData: PostInterface){
    this.postApiService.updatePost(postData);
  }

  deletePost(id: number){
    this.postApiService.deletePost(id);
  }

}
