import { ObjectUnsubscribedError } from 'rxjs';
import { identifierModuleUrl } from '@angular/compiler';

export class DestinoViaje {
    private selected: boolean;
    public nombre: string;
    public imagenUrl:string;
    public servicios: string[];
    id = uuid();

    constructor(n:string, u:string, public votes: number = 0){
        this.nombre=n;
        this.imagenUrl=u;
        this.servicios = ['playa', 'desayuno'];
    }
    isSelected(): boolean{
        return this.selected;
    }
    setSelected(s:boolean){
        this.selected = s;
    }
    voteUp():any {
       this.votes++;
    }
    voteDown():any {
        this.votes--;
     }
}
