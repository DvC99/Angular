import { Component, OnInit, Input, HostBinding} from '@angular/core';
import { DestinoViaje } from '../models/destino-viaje.model';

@Component({
  selector: 'app-destino-viaje',
  templateUrl: './destino-viaje.component.html',
  styleUrls: ['./destino-viaje.component.css']
})
export class DestinoViajeComponent implements OnInit {
  @Input() destinos: DestinoViaje;
  @HostBinding('attr.class') cssClass ='col-sm-4';

  constructor() {}
         
  ngOnInit(): void {
  }

}
