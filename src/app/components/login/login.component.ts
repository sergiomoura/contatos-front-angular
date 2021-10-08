import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService:AuthService, private router:Router) { }
  email:string = "";
  senha:string = "";
  
  login(){
    this.authService.login(this.email, this.senha).subscribe(
      data => {this.goHome()}
    )
  }

  private goHome(){
    this.router.navigateByUrl('/home');
  }

  ngOnInit(): void {
  }

}
