import { Component, OnInit } from '@angular/core';
import { Post } from '../../shared/interfaces/post';
import { PostService } from '../../shared/services/post.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  public listPosts: any;

  constructor(private postService: PostService) {
    
  }

  ngOnInit() {}

  private doRequest(): void {
    this.postService.doRequest().subscribe(
      (doc) => {
this.listPosts = doc
      },
      (err) => {

      }
    );
  }
  public showTittle(tittle: string): void {
    alert(`Entrada seleccionada: ${tittle}.`);
  }
}
