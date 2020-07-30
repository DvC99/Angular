import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { DestinoViaje } from './../models/destino-viaje.model';
import { DestinosApiCliente } from './../models/destino-api-client.model';


@Component({
  selector: 'app-lista-destinos',
  templateUrl: './lista-destinos.component.html',
  styleUrls: ['./lista-destinos.component.css']
})
export class ListaDestinosComponent implements OnInit {
  @Output() onItemAdded: EventEmitter<DestinoViaje>;
  
  constructor(private destniApiClient: DestinosApiCliente) { 
    this.onItemAdded = new EventEmitter();
  }

  ngOnInit(): void {
  }

  agregado(d: DestinoViaje){
    this.destniApiClient.add(d);
    this.onItemAdded.emit(d);
  }

  elegido (d:DestinoViaje) {
    this.destniApiClient.getAll().forEach(x => x.setSelected(false));
    d.setSelected(true);
  }
}
