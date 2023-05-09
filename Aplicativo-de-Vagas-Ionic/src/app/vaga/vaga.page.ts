 
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { LoadingController, ToastController } from '@ionic/angular';
import { ProductService } from 'src/app/services/vagas.service';
import { Product } from 'src/app/models/product';
import { Subscription } from 'rxjs';
 
import {Router} from '@angular/router';
@Component({
  selector: 'app-vaga',
  templateUrl: './vaga.page.html',
  styleUrls: ['./vaga.page.scss'],
})
export class VagaPage implements OnInit {

  private loading: any;
  public products = new Array<Product>();
  private productsSubscription: Subscription;
  userId:string;
  name:string;
  email:string;
  phone:string;
  constructor(
    private authService: AuthService,
    private loadingCtrl: LoadingController,
    private productService: ProductService,
    private router: Router,
    private toastCtrl: ToastController
  ) {
    this.productsSubscription = this.productService.getProducts().subscribe(data => {
      this.products = data;
    });
  }
 
  ngOnInit() { }

  ngOnDestroy() {
    this.productsSubscription.unsubscribe();
  }

  gotoProfile(){
    this.router.navigate(['/details']);
  }

  async presentLoading() {
    this.loading = await this.loadingCtrl.create({ message: 'Aguarde...' });
    return this.loading.present();
  }

  async deleteProduct(id: string) {
    try {
      await this.productService.deleteProduct(id);
    } catch (error) {
      this.presentToast('Erro ao tentar deletar');
    }
  }

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({ message, duration: 2000 });
    toast.present();
  }
}