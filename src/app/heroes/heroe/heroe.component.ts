import { Component } from "@angular/core";


@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
}) 


export class HeroeComponent {
    nombre: string = 'Iron Man';
    edad: number = 45;

    get NombreCapitalizado(){
        return this.nombre.toLocaleUpperCase();
    }
    ObtenerNombre() :string{
return `${this.nombre}-${this.edad}`;
    }

    CambiarNombre():void {
     this.nombre = 'SpiderMan';
    
    }
    CambiarEdad():void{
        this.edad = 30;
    }
}
