import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComponenteHijoEmpleadoComponent } from './componente-hijo-empleado/componente-hijo-empleado.component';
import { ComponenteCaracteristicasComponent } from './componente-caracteristicas/componente-caracteristicas.component';
import { ServicioEmpleadoService } from './servicio-empleado.service';
import { EmpleadosService } from './empleados.service';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ProyectsComponentComponent } from './proyects-component/proyects-component.component';
import { UsComponentComponent } from './us-component/us-component.component';
import { ContactComponentComponent } from './contact-component/contact-component.component';
import { RouterModule, Routes } from '@angular/router';
import { UpdateComponentComponent } from './update-component/update-component.component';

const appRoutes: Routes = [
  {
    path: '', component: HomeComponentComponent
  },
  {
    path: 'proyects', component: ProyectsComponentComponent
  },
  {
    path: 'us', component: UsComponentComponent
  },
  {
    path: 'contact', component: ContactComponentComponent
  },
  {
    path: 'update/:id', component: UpdateComponentComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ComponenteHijoEmpleadoComponent,
    ComponenteCaracteristicasComponent,
    HomeComponentComponent,
    ProyectsComponentComponent,
    UsComponentComponent,
    ContactComponentComponent,
    UpdateComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ServicioEmpleadoService, EmpleadosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
