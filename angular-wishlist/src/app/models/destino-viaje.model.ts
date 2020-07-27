export class DestinoViaje {
    private selected: boolean;
    public nombre: string;
    public imagenUrl:string;
    public servicios: string[];

    constructor(n:string, u:string){
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
}
