import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiReponseSingle } from 'src/app/model/common/ApiResponseSingle';
import { ApiValidationService } from './common/api-validation.service';

@Injectable({
  providedIn: 'root'
})
export class SignService {

  private signInUrl = '/yooni/login'
  private signUpUrl = '/yooni/join'

  constructor(private http: HttpClient,private apiValidationService: ApiValidationService) { }

  signIn(id: string ,password: string): Promise<any>{
    const params = new FormData();
    params.append('userid',id);
    params.append('password',password);
    params.append('lang','ko');
    return this.http.post<ApiReponseSingle>(this.signInUrl,params)
    .toPromise()
    .then(this.apiValidationService.validateResponse)
    .then(response => {
      localStorage.setItem('x-auth-token',response.data);
    })
    .catch(response => {
      alert('[로그인 실패]\n' + response.error.message);
      return Promise.reject(response.error.message);
    });
  }

  signUp(id: string ,password: string, name: string): Promise<any>{
    const params = new FormData();
    params.append('userid',id);
    params.append('password',password);
    params.append('name',name);
    return this.http.post<ApiReponseSingle>(this.signUpUrl,params)
    .toPromise()
    .then(this.apiValidationService.validateResponse)
    .then(response => {
      return true;
    })
    .catch(response => {
      alert('[가입 실패]\n' + response.error.message);
      return Promise.reject(response.error.message);
    });
  }
  isSignIn(): boolean {
    const token = localStorage.getItem('x-auth-token');
    if(token){
      return true;
    } else{
      return false;
    }
  }
}
