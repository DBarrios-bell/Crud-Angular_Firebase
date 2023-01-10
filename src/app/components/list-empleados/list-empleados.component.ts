import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ToastrService } from 'ngx-toastr';
import { EmpleadoService } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-list-empleados',
  templateUrl: './list-empleados.component.html',
  styleUrls: ['./list-empleados.component.css']
})
export class ListEmpleadosComponent implements OnInit {
  empleados: any[] =[];

  constructor( private _empleadosServices: EmpleadoService,
                private toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.getEmpleados()
  }

  getEmpleados(){
    this._empleadosServices.getEmpleados().subscribe(data=>{
      this.empleados=[];
      data.forEach((element:any) => {
        // console.log(element.payload.doc.data());
        this.empleados.push({
          id:element.payload.doc.id,
          ...element.payload.doc.data()
        })
      });
      console.log(this.empleados);
    });
  }

  eliminarEmpleado(id: string){
    this._empleadosServices.eliminarEmpleado(id).then(()=>{
      // console.log('eliminado con exito')
      this.toastr.error('Empleado eliminado exitosamente','Registro Eliminado!',{
        positionClass: 'toast-bottom-right'
      });
    }).catch(error =>{
      console.log(error);
    })
  }

}
