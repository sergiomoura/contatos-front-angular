import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Output() emissor:EventEmitter<null> =  new EventEmitter();

  constructor(private router:Router,  private authService:AuthService) { }

  mostrarModalClick() {
    this.emissor.emit();
  }

  logout(){
    this.authService.logout();
    this.router.navigateByUrl("/")
  }

  ngOnInit(): void {
  }

}
