import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user.interface';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  errorMessage!:String;
  validationMessage!:boolean;
  token!:any;
  user:User = {email: '', password: ''};
  userLogged:any= localStorage.getItem("userLogged");
  isErrorShown: boolean = false;

  display(){
    return this.isErrorShown;
  }
  //https://stackoverflow.com/questions/53567993/angular-get-request-from-user-input/53568698

  getEmail(event: any){
    this.user.email= event.target.value; 
  }
  getPassword(event: any){
    this.user.password= event.target.value; 
  }

  constructor(private http: HttpClient) { }
  login(){
    this.http.post<any>('https://reqres.in/api/login',this.user).subscribe({
      next: data => {
          this.token = data.token;
          this.validationMessage = true;
          this.saveUser();
      },
      error: error => { 
          this.errorMessage = error.message;
          console.error('Could\'t login with that email and password', error);
          this.validationMessage = false;
          this.isErrorShown = true;
      }
    })
  }

  //https://stackoverflow.com/questions/58500879/implement-session-storage-in-an-angular-8-application
  saveUser(){
    this.http.get<any>('https://reqres.in/api/users').subscribe({
        next: data => {
          for(let obj in data.data){
            if(data.data[obj].email === this.user.email){
              localStorage.setItem("userLogged",data.data[obj].first_name);
            }
          }
        },
        error: error => { 
            this.errorMessage = error.message;
            console.error('There was no such existing email!', error);
        }
    })
  }

  ngOnInit(): void {
    
  }

}
