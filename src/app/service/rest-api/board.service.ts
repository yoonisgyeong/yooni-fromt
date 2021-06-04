import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ApiValidationService} from "./common/api-validation.service";
import {Post} from "../../model/board/Post";
import {ApiReponseList} from "../../model/common/ApiResponseList";

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  constructor(private http: HttpClient, private apiValidationService: ApiValidationService) { }
  private getBoardUrl = '/yooni/board';

  getPosts(boardName: string): Promise<Post[]>{
    const getPostUrl = this.getBoardUrl+ '/' + boardName + '/posts';
    console.log(getPostUrl);
    return this.http.get<ApiReponseList>(getPostUrl)
      .toPromise()
      .then(this.apiValidationService.validateResponse)
      .then(response => {
        return response.list as Post[];
      })
      .catch(response => {
        alert('[게시판 조회 중 오류 발생]\n' + response.error.message);
        return Promise.reject(response.error.message);
      })
  }
}
