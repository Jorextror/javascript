import { Injectable } from "@angular/core";
import { Cotxe} from "../models/cotxe";

@Injectable()
export class CotxeService{
    public cotxes: Array <Cotxe>;

    constructor(){
        this.cotxes=[
            new Cotxe('pigs','4A','blanc',120, "electric"),
            new Cotxe('audi','4A','groc',120, "electric"),
        ];
    }
    getText():String{
        return 'servei esta aqui';
    }
    getCotxes():Array<Cotxe>{
        return this.cotxes;
    }
}