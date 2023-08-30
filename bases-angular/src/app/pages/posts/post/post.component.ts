import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PostsResponse } from 'src/app/Interfaces/posts.interface';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {

@Input() post !: PostsResponse;
@Output() clickPost = new EventEmitter<number>();


constructor(){}

onClick(id: number){
  this.clickPost.emit(id);

}

}
