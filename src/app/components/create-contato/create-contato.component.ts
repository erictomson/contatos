import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { Contato } from 'src/app/models/Contato';

@Component({
  selector: 'app-create-contato',
  templateUrl: './create-contato.component.html',
  styleUrls: ['./create-contato.component.css']
})
export class CreateContatoComponent implements OnInit {

  @Output() onCancelarClick:EventEmitter<null> = new EventEmitter();
  novoContato:Contato = {
    nome:"",
    email:"",
    telefones:["1111-1111","2222-2222","3333-3333"]
  }

  constructor() { }

  ngOnInit(): void {
  }

  cancelar():void {
    // console.log("Pediu para cancelar");
    this.onCancelarClick.emit();
  }

  track(index:number, value:string) {
    return index;
  }

}
