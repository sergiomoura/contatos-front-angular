import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  public nome:string   = '';
  public email:string  = '';
  public senha:string  = '';
  public conf:string   = '';

  constructor(private authService:AuthService, private router:Router) { }

  ngOnInit(): void {
  }

  cadastrar(){
    this.authService.cadastrar(this.nome, this.email, this.senha).subscribe(
      () => {
        this.goHome();
      }
    )
  }

  private goHome(){
    this.router.navigateByUrl('/home')
  }
}
