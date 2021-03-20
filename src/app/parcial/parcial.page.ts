import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parcial',
  templateUrl: './parcial.page.html',
  styleUrls: ['./parcial.page.scss'],
})
export class ParcialPage implements OnInit {
  mas=null;
  menos=null;
  por=null;
  division=null;
  todos=[];
  numeros=[];
  numeros1=null;
  i=0;
  resultado=null;
  j=0;

  constructor() { }
  fununo(){
    this.todos[this.i]=1
    this.i=this.i+1
  }
  fundos(){
    this.todos[this.i]=2
    this.i=this.i+1
  }
  funtres(){
    this.todos[this.i]=3
    this.i=this.i+1
  }
  funcuatro(){
    this.todos[this.i]=4
    this.i=this.i+1
  }
  funcinco(){
    this.todos[this.i]=5
    this.i=this.i+1
  }
  funseis(){
    this.todos[this.i]=6
    this.i=this.i+1
  }
  funsiete(){
    this.todos[this.i]=7
    this.i=this.i+1
  }
  funocho(){
    this.todos[this.i]=8
    this.i=this.i+1
  }
  funnueve(){
    this.todos[this.i]=9
    this.i=this.i+1
  }
  funcero(){
    this.todos[this.i]=0
    this.i=this.i+1
  }
  funmas(){
    this.todos[this.i]="+"
    this.i=this.i+1

  }
  funmenos(){
    this.todos[this.i]="-"
    this.i=this.i+1
  }
  funpor(){
    this.todos[this.i]="*"
    this.i=this.i+1
  }
  fundividir(){
    this.todos[this.i]="/"
    this.i=this.i+1
  }
  funcalcular(){
    console.log(this.todos)
    for (var h = 0; h<this.i;h++){
      
      if (Number.isInteger(this.todos[h])){
        this.numeros[this.j]=this.numeros + this.todos[h]
      }else{
        this.j=this.j+1
      }
    }
    console.log(this.numeros)
  
  

  

  
  }

  ngOnInit() {
  }

}
