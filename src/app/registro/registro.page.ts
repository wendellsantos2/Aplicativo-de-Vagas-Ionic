 
import { Component, OnInit ,ViewChild} from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { LoadingController, NavController, Platform, ToastController,IonSlides } from '@ionic/angular';
 
import { AuthService } from '../services/auth.service';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  email:string;
  password:string;
  name: string; 
  phone:string;
  
  @ViewChild(IonSlides) slides: IonSlides;
  public wavesPosition: number = 0;
  private wavesDifference: number = 100;
  constructor(private toastCtrl: ToastController,
     private loadingCtrl: LoadingController,
      private afAuth: AngularFireAuth,
       private navCtrl: NavController,
        private platform: Platform,
        private auth : AuthService,
        private toastr: ToastController,
        
        private afs:AngularFirestore,
        private afauth: AngularFireAuth,
        private router: Router,
         ) { }

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

 segmentChanged(event: any) {
  if (event.detail.value === 'login') {
    this.slides.slidePrev();
    this.wavesPosition += this.wavesDifference;
  } else {
    this.slides.slideNext();
    this.wavesPosition -= this.wavesDifference;
  }
}

esqueciSenha(){
  this.router.navigate(['/forgot-password']);
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

 
    
      
   

}