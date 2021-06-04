// board.component.ts
import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/model/board/Post';
import {BoardService} from "../../../service/rest-api/board.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  posts: Post[] = [];
  displayedColumns: String[] = ['postId', 'title', 'author', 'createdAt', 'modifiedAt'];
  boardName: string = "";

  constructor(private boardService: BoardService, private route: ActivatedRoute) {
    this.boardName = this.route.snapshot.params['boardName'];
  }

  ngOnInit() {
    this.boardService.getPosts(this.boardName).then(response => {
      this.posts = response;
    })
  }
}
