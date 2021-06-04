import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { LogoutComponent } from './component/user/logout/logout.component';
import { SigninComponent } from './component/user/signin/signin.component';
import { SignupComponent } from './component/user/signup/signup.component';
import { UserInfoComponent } from './component/user/user-info/user-info.component';
import {AuthGuard} from "./guards/auth.guard";
import {BoardComponent} from "./component/board/board/board.component";

const routes: Routes = [
  {path:'board/:boardName',component: BoardComponent},
  {path:'myinfo',component: UserInfoComponent,canActivate:[AuthGuard]},
  {path:'logout',component: LogoutComponent},
  {path:'signup',component: SignupComponent},
  {path:'signin',component: SigninComponent},
  {path:'**',component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
