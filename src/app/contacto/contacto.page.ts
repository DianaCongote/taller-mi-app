import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.page.html',
  styleUrls: ['./contacto.page.scss'],
})
export class ContactoPage implements OnInit {

  nombre = null;
  constructor() { }
  saludar(){
    if (this.nombre == null){
      console.log('no hay nombre')
      alert("ingrese su nombre para el saludo")
    }else{
      console.log(this.nombre)
      alert("Hola "+ this.nombre)
    }
  }
  
  ngOnInit() {
  }

}
