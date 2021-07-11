import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AngularTypewriterEffectModule } from 'angular-typewriter-effect';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { BackgroundComponent } from './shared/background/background.component';
import { QuienessomosComponent } from './inicio/quienessomos/quienessomos.component';
import { BilleteraComponent } from './inicio/billetera/billetera.component';
import { HomeComponent } from './inicio/home/home.component';
import { ContactoComponent } from './inicio/contacto/contacto.component';
import { RegistroComponent } from './inicio/registro/registro.component';
import { BeneficiosComponent } from './inicio/beneficios/beneficios.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BackgroundComponent,
    QuienessomosComponent,
    BilleteraComponent,
    HomeComponent,
    ContactoComponent,
    RegistroComponent,
    BeneficiosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularTypewriterEffectModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
