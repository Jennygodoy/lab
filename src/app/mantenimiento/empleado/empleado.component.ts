import { Component, OnInit } from '@angular/core';
import { Empleado } from '../../api/models/empleado';
import { EmpleadoControllerService } from '../../api/services/empleado-controller.service';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent  {
  
  empleado:Empleado[]=[];
 
  constructor(
    private empleadoService:EmpleadoControllerService
    
  )

{}
ngOnInit(): void{
  this.empleadoService.find().subscribe(data=>this.empleado=data)
}
eliminar(id?:string):void{
  
}
cancel():void{

}
}
