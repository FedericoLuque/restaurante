import { Injectable } from "@angular/core";
import { Reservas } from "./reservas/reservas.model";
import { Firestore, addDoc, collection } from "@angular/fire/firestore";

@Injectable()
export class DataServices{

    constructor(private firestore:Firestore){}

guardarReserva(reserva:Reservas){
    const reservaRef = collection(this.firestore, 'listareservas');
    return addDoc(reservaRef, reserva.toJSON());
    }   
}