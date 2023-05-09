import { Component, OnInit } from '@angular/core';
import { Usuario } from '../models/usuario.model';
import { LoadingController, NavController, ToastController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Route, Router } from '@angular/router';


@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})
export class RegistrarPage implements OnInit {

   name: string;
   email:string;
   phone:string;
   password: string;

  constructor(private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private afAuth: AngularFireAuth,
    private navCtrl: NavController,
    private afs:AngularFirestore,
    private afauth: AngularFireAuth,
    private router: Router,
    private toastr: ToastController) {}

    async register()
    {
       if (this.name && this.email && this.phone && this.password) 
       {
        var loading = await this.loadingCtrl.create({
            message: 'processing..',
            spinner: 'crescent',
            showBackdrop: true
          });
      
        }else {
          this.toast('por favor complete todos os dados ', 'danger')
        }

        loading.present();

        this.afAuth.createUserWithEmailAndPassword(this.email,this.password).then((data)=>{
          data.user.sendEmailVerification();
          this.afs.collection('user').doc(data.user.uid).set({
            'userId':data.user.uid,
            'userName': this.name,
            'userEmail': this.email,
            'userPhone': this.phone,
            'createdAt': Date.now()
          })
          
          .then(()=>{
            loading.dismiss();
            this.toast('Registrado com sucesso! por favor check seu email ','sucess');
            this.router.navigate(['/login']);
          })
          .catch(error => {
             this.toast(error.message,'danger');
          })
        })
        .catch(error =>{
          loading.dismiss();
          this.toast(error.message,'danger')
        })
      } // end of registre

      async toast(message,status){
        const toast = await this.toastr.create({
          message : message,
          color:status,
          position: 'top',
          duration:2000
        });
        toast.present();
      }
      
  ngOnInit() {
  }

}
