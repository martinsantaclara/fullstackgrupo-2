import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GridbilleteraComponent } from './gridbilletera/gridbilletera.component';
import { GridgalleryComponent } from './gridgallery/gridgallery.component';
import { BeneficiosComponent } from './inicio/beneficios/beneficios.component';
import { BilleteraComponent } from './inicio/billetera/billetera.component';
import { ContactoComponent } from './inicio/contacto/contacto.component';
import { HomeComponent } from './inicio/home/home.component';
import { Home2Component } from './inicio/home2/home2.component';
import { QuienessomosComponent } from './inicio/quienessomos/quienessomos.component';
import { RegistroComponent } from './inicio/registro/registro.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'home2', component: Home2Component },
  { path: 'nosotros', component: QuienessomosComponent},
  { path: 'billetera', component: BilleteraComponent},
  { path: 'beneficios', component: BeneficiosComponent},
  { path: 'contacto', component: ContactoComponent},
  { path: 'registro/:id', component: RegistroComponent},
  { path: 'gridbilletera', component: GridbilleteraComponent},
  { path: 'gridgallery', component: GridgalleryComponent}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
