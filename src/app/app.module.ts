
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
 
//---- firebase ----
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FormsModule } from '@angular/forms';
 
import { AuthService } from './services/auth.service';

import { AuthGuard } from './guards/auth.guard';
import { StatusBar } from '@capacitor/status-bar';
 
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
     IonicModule.forRoot(),
      AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,    
    AngularFirestoreModule,
    FormsModule,
  

  
  ],
  providers: [
    AuthService,
    AuthGuard,
  
    { 
    provide: RouteReuseStrategy, 
    useClass: IonicRouteStrategy,
      
  }],
  bootstrap: [AppComponent],
})
export class AppModule {}