import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.css']
})
export class NosotrosComponent implements AfterViewInit {
  @ViewChild('mapElement', {static: false}) mapElement: ElementRef | undefined;
  private map: google.maps.Map | undefined;
  private infoWindow: google.maps.InfoWindow | undefined;

  constructor() { }

  ngAfterViewInit(): void {
    this.initMap();
  }

  async initMap(): Promise<void> {
    if (this.mapElement) {
      const position = { lat: 37.20981752025503, lng: -3.6269303101744894 };
      const { Map } = await google.maps.importLibrary("maps") as google.maps.MapsLibrary;

      this.map = new Map(
        this.mapElement.nativeElement,
        {
          zoom: 17,
          center: position,
          mapId: 'Restaurante',
        }
      );

      // Crear un infoWindow para mostrar información del marcador
      this.infoWindow = new google.maps.InfoWindow();

      // Crear el marcador
      const marker = new google.maps.Marker({
        position: position,
        map: this.map,
        title: 'El Peñón'
      });

      // Agregar un controlador de eventos de clic al marcador
      marker.addListener('click', () => {
        // Configurar el contenido del infoWindow
        this.infoWindow?.setContent('<div style="font-family: Arial; font-size: 15px; color: #333; padding: 10px;">Restaurante El Peñón</div>');

        // Abrir el infoWindow en la posición del marcador
        this.infoWindow?.open(this.map, marker);
      });
    }
  }
}
