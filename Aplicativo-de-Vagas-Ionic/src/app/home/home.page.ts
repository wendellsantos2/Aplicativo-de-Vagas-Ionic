import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private auth: AuthService,
    private router: Router
  ) {}

  logout(){
    this.auth.singOut();
  }

  gotoProfile(){
    this.router.navigate(['/profile']);
  }
  
  verVagas(){
    this.router.navigate(['/vaga']);
  }
  cadastrarVagas(){
    this.router.navigate(['/cadastro-vagas']);
  }
  CandidatosVagas(){
    this.router.navigate(['/candidatos-vagas'])
  }
}
