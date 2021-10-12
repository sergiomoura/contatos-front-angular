import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventHubService {

  public static carregamentoIniciado:EventEmitter<string> = new EventEmitter();
  public static carregamentoFinalizado:EventEmitter<string> = new EventEmitter();

  constructor() { }
}
