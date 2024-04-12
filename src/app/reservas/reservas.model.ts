export class Reservas{
    
    constructor(nombre:string, email:string, telefono:string, fecha:string, hora:string, comensales:number, solicitudes:string){
        
        this.nombre=nombre;
        this.email=email;
        this.telefono=telefono;
        this.fecha=fecha;
        this.hora=hora;
        this.comensales=comensales;
        this.solicitudes=solicitudes;
        
    }

    toJSON(): any {
        return {
            nombre: this.nombre,
            email: this.email,
            telefono: this.telefono,
            fecha: this.fecha,
            hora: this.hora,
            comensales: this.comensales,
            solicitudes: this.solicitudes,
        };
    }

    nombre:string="";
    email:string="";
    telefono:string="";
    fecha:string="";
    hora:string="";
    comensales:number=0;
    solicitudes: string="";
}