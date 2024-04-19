import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { InicioComponent } from './inicio/inicio.component';
import { RouterModule, Routes } from '@angular/router';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { CartaComponent } from './carta/carta.component';
import { ReservasComponent } from './reservas/reservas.component';
import { FormsModule } from '@angular/forms';
import { ServicioRestauranteService } from './servicio-restaurante.service';
import { ReservasService } from './reservas.service';
import { ErrorComponent } from './error/error.component';
import { DataServices } from './data.services';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { GoogleMapsModule } from '@angular/google-maps';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { GaleriaComponent } from './galeria/galeria.component';

const appRoutes:Routes=[
  {path:'', component:InicioComponent},
  {path:'nosotros', component:NosotrosComponent},
  {path:'carta', component:CartaComponent},
  {path:'reservas', component:ReservasComponent},
  {path:'galeria', component:GaleriaComponent},
  {path:'**',component:ErrorComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    InicioComponent,
    ReservasComponent,
    HeaderComponent,
    NosotrosComponent,
    GaleriaComponent
  ],
  imports: [
    BrowserModule,
    GoogleMapsModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    provideFirebaseApp(() => initializeApp({"projectId":"restaurante-b69c3","appId":"1:260483386429:web:2067c65812de651d136e54","storageBucket":"restaurante-b69c3.appspot.com","apiKey":"AIzaSyBqkXZsFXELqZy2ETSacnfFqvWNmeP0TKE","authDomain":"restaurante-b69c3.firebaseapp.com","messagingSenderId":"260483386429"})),
    provideFirestore(() => getFirestore())
  ],
  providers: [ServicioRestauranteService, ReservasService, DataServices, provideAnimationsAsync()],
  bootstrap: [AppComponent]
})
export class AppModule { }
