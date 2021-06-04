import { Component, OnInit } from '@angular/core';
import { MyinfoService } from 'src/app/service/rest-api/myinfo.service';
import { User } from 'src/app/model/myinfo/User';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})


export class UserInfoComponent implements OnInit {
  loginUser?: User = undefined;
  

  constructor(private myInfoService: MyinfoService) { 

    this.myInfoService.getUser().then(user =>{
      this.loginUser = user;
    })
  }
  ngOnInit(): void {
  }

}

