import { Component, OnInit } from '@angular/core';
import { Contato } from 'src/app/models/Contato';

@Component({
  selector: 'app-lista-de-contatos',
  templateUrl: './lista-de-contatos.component.html',
  styleUrls: ['./lista-de-contatos.component.css']
})
export class ListaDeContatosComponent implements OnInit {

  contatos: Contato[] = [
    {
      nome: "<ariana Ribeiro 1",
      email: "mariana@teste.com",
      telefones: ['1111-1111']
    },
    {
      nome: "<ariana Ribeiro 2",
      email: "mariana@teste.com",
      telefones: ['1111-1111']
    },
    {
      nome: "<ariana Ribeiro 3",
      email: "mariana@teste.com",
      telefones: ['1111-1111']
    },
    {
      nome: "<ariana Ribeiro 4",
      email: "mariana@teste.com",
      telefones: ['1111-1111']
    },
    {
      nome: "<ariana Ribeiro 5",
      email: "mariana@teste.com",
      telefones: ['1111-1111']
    },
    {
      nome: "<ariana Ribeiro 6",
      email: "mariana@teste.com",
      telefones: ['1111-1111']
    },
    {
      nome: "<ariana Ribeiro 7",
      email: "mariana@teste.com",
      telefones: ['1111-1111']
    },
    {
      nome: "<ariana Ribeiro 1",
      email: "mariana@teste.com",
      telefones: ['1111-1111']
    },
    {
      nome: "<ariana Ribeiro 8",
      email: "mariana@teste.com",
      telefones: ['1111-1111']
    },
    {
      nome: "<ariana Ribeiro 9",
      email: "mariana@teste.com",
      telefones: ['1111-1111']
    }];

  constructor() { }

  ngOnInit(): void {
  }

}
