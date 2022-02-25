import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {
  // isLogged:any = localStorage.getItem("userLogged");

  constructor() { }
  
  ngOnInit(): void {
  }
  logout(){
    localStorage.removeItem("userLogged");
    window.location.reload();
  }
}
