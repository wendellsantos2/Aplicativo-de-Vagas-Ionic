import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ToastController,LoadingController } from '@ionic/angular';
import {  Router } from '@angular/router';
 
 
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {
  firebaseConfig: any={
    apiKey: " ",
    authDomain: " ",
    projectId: " ",
     
    }

  email:string;

  constructor(
    private afauth:AngularFireAuth,
    private toastr:ToastController,
    private router: Router,
    private loadingCtrl: LoadingController
  ) { }

  ngOnInit() {
   
  }

  

  async resetPassword(){
    if(this.email)
    {
      const loading = await this.loadingCtrl.create({
        message: 'por favor espere..',
        spinner:'crescent',
        showBackdrop:true
      });
      loading.present();
      this.afauth.sendPasswordResetEmail(this.email)
      .then(()=>{
        loading.dismiss();
        this.toast('por favor check seu email','sucess');
        this.router.navigate(['/login']);
      })
      .catch((error)=>{
        loading.dismiss();
        this.toast(error.message,'danger');
      })

    }else{
     this.toast('por favor entre no seu email !','danger')
    }
  }// reset of password


  async toast(message,status){
    const toast = await this.toastr.create({
      message : message,
      color:status,
      position: 'top',
      duration:2000
    });
    toast.present();
  }
}
