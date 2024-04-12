import { Component } from '@angular/core';
import { Reservas } from './reservas.model';
import { ReservasService } from '../reservas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrl: './reservas.component.css'
})
export class ReservasComponent {
  title = 'restaurante';

  constructor(private router:Router, private miReserva:ReservasService) { 

    this.reservas=this.miReserva.reservas;

   }

  reservas:Reservas[]=[];

  agregarReserva(){
    
    let nuevaReserva = new Reservas(
      this.cuadroNombre, 
      this.cuadroEmail, 
      this.cuadroTelefono, 
      this.cuadroFecha, 
      this.cuadroHora, 
      this.cuadroComensales, 
      this.cuadroSolicitudes);

    this.miReserva.agregarReservaServicio(nuevaReserva);
  }

  volverHome(){

    this.router.navigate([""]);

  }
  
    cuadroNombre:string="";
    cuadroEmail:string="";
    cuadroTelefono:string="";
    cuadroFecha:string="";
    cuadroHora:string="";
    cuadroComensales:number=0;
    cuadroSolicitudes:string="";
    
  }

