import { Component, OnInit, Input, HostBinding, Output, EventEmitter} from '@angular/core';
import { DestinoViaje } from './../models/destino-viaje.model';

@Component({
  selector: 'app-destino-viaje',
  templateUrl: './destino-viaje.component.html',
  styleUrls: ['./destino-viaje.component.css']
})
export class DestinoViajeComponent implements OnInit {
  @Input() destinos: DestinoViaje;
  @Input('idx') position: number;
  @HostBinding('attr.class') cssClass ='col-sm-4';
  @Output() clicked: EventEmitter<DestinoViaje>;

  constructor() {
    this.clicked = new EventEmitter();
  }
         
  ngOnInit(): void {
  }

  ir (){
    this.clicked.emit(this.destinos);
    return false;
  }

}
