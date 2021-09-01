import { Injectable } from '@angular/core';
import { Contato } from '../models/Contato';


@Injectable({
  providedIn: 'root'
})
export class ContatoService {
  
  private BASE_DE_CONTATOS:Contato[] = [
    {
      nome: "Mariana Ribeiro 1",
      email: "mariana@teste.com",
      telefones: ['1111-1111','2222-2222','3333-3333']
    },
    {
      nome: "Mariana Ribeiro 2",
      email: "mariana@teste.com",
      telefones: ['1111-1111']
    },
    {
      nome: "Mariana Ribeiro 3",
      email: "mariana@teste.com",
      telefones: ['1111-1111']
    },
    {
      nome: "Mariana Ribeiro 4",
      email: "mariana@teste.com",
      telefones: ['1111-1111']
    },
    {
      nome: "Mariana Ribeiro 5",
      email: "mariana@teste.com",
      telefones: ['1111-1111']
    },
    {
      nome: "Mariana Ribeiro 6",
      email: "mariana@teste.com",
      telefones: ['1111-1111']
    },
    {
      nome: "Mariana Ribeiro 7",
      email: "mariana@teste.com",
      telefones: ['1111-1111']
    },
    {
      nome: "Mariana Ribeiro 1",
      email: "mariana@teste.com",
      telefones: ['1111-1111']
    },
    {
      nome: "Mariana Ribeiro 8",
      email: "mariana@teste.com",
      telefones: ['1111-1111']
    },
    {
      nome: "Mariana Ribeiro 9",
      email: "mariana@teste.com",
      telefones: ['1111-1111']
    }];

  constructor() { }

  getContatos():Contato[] {
    return this.BASE_DE_CONTATOS;
  }

  addContato(contato:Contato):void {
    this.BASE_DE_CONTATOS.push(contato);
  }

}
