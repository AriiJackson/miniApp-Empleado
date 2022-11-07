import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComponenteHijoEmpleadoComponent } from './componente-hijo-empleado/componente-hijo-empleado.component';
import { ComponenteCaracteristicasComponent } from './componente-caracteristicas/componente-caracteristicas.component';

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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
