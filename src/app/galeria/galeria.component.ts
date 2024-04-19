import { Component } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrl: './galeria.component.css'
})
export class GaleriaComponent {

  images = [
    { url: '../../assets/img/galeria/galeria1.jpg', alt: 'Solomillo en salsa' },
    { url: '../../assets/img/galeria/galeria2.jpg', alt: 'Gambas a la plancha' },
    { url: '../../assets/img/galeria/galeria3.jpg', alt: 'Entrecot de ternera' },
    { url: '../../assets/img/galeria/galeria4.jpg', alt: 'Secreto iberico' },
  ];

}
