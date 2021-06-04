import {HttpClient, HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiReponseSingle } from 'src/app/model/common/ApiResponseSingle';
import { User } from 'src/app/model/myinfo/User';
import { ApiValidationService } from './common/api-validation.service';

@Injectable({
  providedIn: 'root'
})
export class MyinfoService {

  constructor(
    private http: HttpClient,
    private apiValidationService: ApiValidationService
  ) { }
  private getUserUrl = '/yooni/user';

  getUser(): Promise<User> {
    //const loginUser = JSON.parse(localStorage.getItem('loginUser'));
    const loginUser = localStorage.getItem('loginUser');
    loginUser !== null ? JSON.parse(loginUser) : null;
    let params = new HttpParams().set("lang", 'ko');
    console.log(loginUser);
    if(loginUser == null){
      return this.http.get<ApiReponseSingle>(this.getUserUrl,{params})
        .toPromise()
        .then(this.apiValidationService.validateResponse)
        .then(response => {
          localStorage.setItem('loginUser', JSON.stringify(response.data));
          return response.data as User;
      })
      .catch(response => {
        localStorage.removeItem('x-auth-token');
        alert('[회원 정보 조회중 오류 발생]\n' + response.error.message)
        console.log("2");
        return Promise.reject(response.error.message);
      });
    } else{
      return Promise.resolve(loginUser !== null ? JSON.parse(loginUser) : null);
    }
  }
}
