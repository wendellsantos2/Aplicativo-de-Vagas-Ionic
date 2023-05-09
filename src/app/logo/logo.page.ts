import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-logo',
  templateUrl: './logo.page.html',
  styleUrls: ['./logo.page.scss'],
})
export class LogoPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }


  abrirLogin(){
     
      this.router.navigate(['/login']);
  
  }
  
  abrirRegistro(){
     
    this.router.navigate(['/registro']);

}
}
