import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'

})
export class ListadoComponent  {
borrado:string = '';
heroes:string[] =  ['IronMan','SpiderMan', 'Hulk','Capitan America', 'Thor']

borrarHeroe(){
 this.borrado = this.heroes.shift() || '';

}
}
