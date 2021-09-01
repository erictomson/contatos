import { Component, EventEmitter, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-contato',
  templateUrl: './create-contato.component.html',
  styleUrls: ['./create-contato.component.css']
})
export class CreateContatoComponent implements OnInit {

  @Output() onCancelarClick:EventEmitter<null> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  cancelar():void {
    // console.log("Pediu para cancelar");
    this.onCancelarClick.emit();
  }

}
