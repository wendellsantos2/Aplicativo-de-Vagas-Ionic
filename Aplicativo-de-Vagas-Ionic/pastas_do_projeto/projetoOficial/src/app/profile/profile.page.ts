import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  user:any;

 
  constructor( 
     private auth: AuthService,
     private router: Router) { }

  ngOnInit() 
  {
    this.auth.user$.subscribe(user =>{
      this.user = user;
    })
  }

  editProfile(){
    this.router.navigate(['/profile/edit']);
  }

}
