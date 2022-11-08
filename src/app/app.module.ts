import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComponenteHijoEmpleadoComponent } from './componente-hijo-empleado/componente-hijo-empleado.component';
import { ComponenteCaracteristicasComponent } from './componente-caracteristicas/componente-caracteristicas.component';
import { ServicioEmpleadoService } from './servicio-empleado.service';
import { EmpleadosService } from './empleados.service';

@NgModule({
  declarations: [
    AppComponent,
    ComponenteHijoEmpleadoComponent,
    ComponenteCaracteristicasComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ServicioEmpleadoService, EmpleadosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
