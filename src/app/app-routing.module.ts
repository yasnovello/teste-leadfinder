import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';
import { EnviarFormularioComponent } from './enviar-formulario/enviar-formulario.component';
import { RecuperarFormularioComponent } from './recuperar-formulario/recuperar-formulario.component';
const routes: Routes = [
  {
    path: 'form',
    component: FormularioComponent,
    data: { title: 'Formulario Teste' },
  },
  {
    path: 'infoForm',
    component: RecuperarFormularioComponent,
    data: { title: 'Informações Formulario' }
  },
  // {
  //   path:'envioForm',
  //   component: EnviarFormularioComponent,
  //   data:{title:'Enviar Formulario'}
  // },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule { }
