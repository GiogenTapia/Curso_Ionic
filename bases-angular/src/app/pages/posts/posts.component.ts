import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { DataService } from '../../services/data.service';
import { PostsResponse } from 'src/app/Interfaces/posts.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit, OnDestroy{
  private _dataService = inject(DataService);

  public posts:   PostsResponse []  = [];
  private suscription : Subscription = new Subscription();

  ngOnInit(): void {
    console.log('INIT');

   const sub1 = this._dataService.getPosts().subscribe(
    (data => this.posts = data)
   );
   this.suscription.add(sub1);

  }


  escucharHijo( id : number ){
    console.log(id);


  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.suscription.unsubscribe();

  }




}
