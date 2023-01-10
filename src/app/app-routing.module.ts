import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEmpleadosComponent } from './components/create-empleados/create-empleados.component';
import { ListEmpleadosComponent } from './components/list-empleados/list-empleados.component';

const routes: Routes = [
  {path: '', redirectTo: 'list-empleado', pathMatch: 'full'},
  {path:'list-empleado',component: ListEmpleadosComponent},
  {path:'create-empleado', component: CreateEmpleadosComponent},
  {path:'editEmpleado/:id', component: CreateEmpleadosComponent},
  {path:'**', redirectTo: 'list-empleado', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
