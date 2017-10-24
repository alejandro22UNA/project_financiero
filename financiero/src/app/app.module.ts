import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterializeModule } from 'angular2-materialize';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PeriodosComponent } from './componentes/periodos/periodos.component';
import { EstadosFinacierosComponent } from './componentes/estados-finacieros/estados-finacieros.component';
import { RLiquidezComponent } from './componentes/r-liquidez/r-liquidez.component';
import { REndeudamientoComponent } from './componentes/r-endeudamiento/r-endeudamiento.component';
import { RRentabilidadComponent } from './componentes/r-rentabilidad/r-rentabilidad.component';
import { RCoberturaComponent } from './componentes/r-cobertura/r-cobertura.component';
import { NotasComponent } from './componentes/notas/notas.component';

const rutas: Routes = [
  {path: '', component: PeriodosComponent},
  {path: 'estados-finacieros', component: EstadosFinacierosComponent},
  {path: 'r-liquidez', component: RLiquidezComponent},
  {path: 'r-endeudamiento', component: REndeudamientoComponent},
  {path: 'r-rentabilidad', component: RRentabilidadComponent},
  {path: 'r-cobertura', component: RCoberturaComponent},
  {path: 'notas', component: NotasComponent}
                      ];
@NgModule({
  declarations: [
    AppComponent,
    PeriodosComponent,
    EstadosFinacierosComponent,
    RLiquidezComponent,
    REndeudamientoComponent,
    RRentabilidadComponent,
    RCoberturaComponent,
    NotasComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    RouterModule.forRoot(rutas)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
