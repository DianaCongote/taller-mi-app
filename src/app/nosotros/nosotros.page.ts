import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.page.html',
  styleUrls: ['./nosotros.page.scss'],
})
export class NosotrosPage implements OnInit {

  numero1 = null;
  operacion = null;
  numero2 = null;
  resultado = null;
  mensaje = null;
  constructor() { }

  haceroperacion(){
    if (this.operacion=='+'){
      this.resultado = parseInt(this.numero1) + parseInt(this.numero2)
      this.mensaje  = 'la suma de '
      console.log(this.resultado)
    }
    if (this.operacion=='-'){
      this.resultado = this.numero1 - this.numero2
      this.mensaje  = 'la resta de '
      console.log(this.resultado)
    }
    if (this.operacion=='*'){
      this.resultado = this.numero1 * this.numero2
      this.mensaje  = 'la multiplicacion de '
      console.log(this.resultado)
    }
    if (this.operacion=='/'){
      this.resultado = this.numero1 / this.numero2
      this.mensaje  = 'la division de '
      console.log(this.resultado)
    }
      
  }

  ngOnInit() {
  }

}
