import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioRestauranteService {

  constructor() { }

  mostrarAviso(mensaje:string){

    alert(mensaje);

  }

}
