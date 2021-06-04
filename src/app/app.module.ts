import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../modules/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HomeComponent } from './component/home/home.component';
import { SigninComponent } from './component/user/signin/signin.component';
import { SignupComponent } from './component/user/signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SignService } from './service/rest-api/sign.service';
import { LogoutComponent } from './component/user/logout/logout.component';
import { UserInfoComponent } from './component/user/user-info/user-info.component';
import { HttpRequestInterceptorService } from './service/rest-api/common/http-request-interceptor.service';
import { MyinfoService } from './service/rest-api/myinfo.service';
import { BoardComponent } from './component/board/board/board.component';
import {BoardService} from "./service/rest-api/board.service";
import { PostComponent } from './component/board/post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SigninComponent,
    SignupComponent,
    LogoutComponent,
    UserInfoComponent,
    BoardComponent,
    PostComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  exports: [
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpRequestInterceptorService,
      multi: true,
    },
    SignService,
    MyinfoService,
    BoardService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
