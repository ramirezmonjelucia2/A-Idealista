import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../../../shared/interfaces/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
@Input()
public casa = new Casa()
  constructor() {
    this.casa = {
      title: '',
      body: '',
    }
   }

  ngOnInit() {
  }

}