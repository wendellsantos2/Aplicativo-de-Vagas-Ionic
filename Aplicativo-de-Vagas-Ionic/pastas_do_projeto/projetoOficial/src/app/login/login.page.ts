import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { LoadingController, NavController, Platform, ToastController } from '@ionic/angular';
import { Usuario } from '../models/usuario.model';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email:string;
  password:string;
  
  constructor(private toastCtrl: ToastController,
     private loadingCtrl: LoadingController,
      private afAuth: AngularFireAuth,
       private navCtrl: NavController,
        private platform: Platform,
        private auth : AuthService,
        private toastr: ToastController ) { }

  ngOnInit() {
  }
 
 login()
 {
  if(this.email && this.password){
    this.auth.signIn(this.email,this.password) 
  }else{
    this.toast('por favor entre com seu email e senha ','warning')
  }
 }


 async toast(message,status)
 {
  const toast = await this.toastr.create({
    message:message,
    color:status,
    position:'top',
    duration: 2000
  });
  toast.present();
 }
}
