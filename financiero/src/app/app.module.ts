import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterializeModule } from 'angular2-materialize';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PeriodosComponent } from './componentes/periodos/periodos.component';
import { EstadosFinacierosComponent } from './componentes/estados-finacieros/estados-finacieros.component';

const rutas: Routes = [{path: '', component: PeriodosComponent},
                       {path: 'estados-finacieros', component: EstadosFinacierosComponent}];
@NgModule({
  declarations: [
    AppComponent,
    PeriodosComponent,
    EstadosFinacierosComponent
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
