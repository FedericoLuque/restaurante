import { Injectable } from '@angular/core';
import { Reservas } from './reservas/reservas.model';
import { ServicioRestauranteService } from './servicio-restaurante.service';
import { DataServices } from './data.services';

@Injectable({
  providedIn: 'root'
})
export class ReservasService {

  constructor(private ventanaEmergente:ServicioRestauranteService, private DataService:DataServices) { }

  reservas:Reservas[]=[]; /* Array reservas. Se utiliza para mostrar las reservas en el componente y para enviarlo a la BBDD*/

  agregarReservaServicio(nuevaReserva:Reservas){

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var tlfRegex = /^\d{9}$/;
    var dateRegex = /^\d{4}-\d{2}-\d{2}$/;

    if (nuevaReserva.nombre.length <1){
      this.ventanaEmergente.mostrarAviso("Por favor, introduzca un nombre válido.")
    }
    else if (nuevaReserva.comensales.valueOf() ===0 ){
      this.ventanaEmergente.mostrarAviso("Por favor, introduzca la cantidad de comensales.")
    }
    else if (!emailRegex.test(nuevaReserva.email) ){
      this.ventanaEmergente.mostrarAviso("Por favor, introduzca un email válido.")
    }
    else if (!tlfRegex.test(nuevaReserva.telefono)){
      this.ventanaEmergente.mostrarAviso("Por favor, introduzca un numero de telefono válido.")
    }
    else if (!nuevaReserva.fecha.includes("-")){
      this.ventanaEmergente.mostrarAviso("Por favor, elija una fecha.");
    }
    else if (!nuevaReserva.hora.includes(":")){
      this.ventanaEmergente.mostrarAviso("Por favor, elija una hora.");
    }
    else{
      this.ventanaEmergente.mostrarAviso("Reserva realizada a nombre de " + nuevaReserva.nombre + ", el dia " + nuevaReserva.fecha + " a las " + nuevaReserva.hora + ".")
      this.reservas.push(nuevaReserva); /*Muestra la reserva en el componente reservas*/
      this.DataService.guardarReserva(nuevaReserva);/*Envia la reserva a la base de datos */
    }
  }

}
