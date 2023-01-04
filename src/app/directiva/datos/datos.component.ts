import { Component } from '@angular/core';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.css']
})
export class DatosComponent {


  constructor() { }

  ngOnInit(): void {
  }

  nombre: string = "";
  apellidos: string = "";
  edad: string = "";
  personas: any[] = [];

  agregarPersona(nombre:string,apellidos:string,edad:string) {
    this.personas.push({
      nombre: nombre,
      apellidos: apellidos,
      edad: edad,
    });
  }

}
