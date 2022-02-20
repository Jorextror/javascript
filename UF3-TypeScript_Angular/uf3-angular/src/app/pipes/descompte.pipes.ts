import { Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'descompte'
})
export class DescomptePipe implements PipeTransform{
    transform(dada1: any, dada2: any) {
        return "Preu Original "+dada1+"€ - Preu Rebaixat"+dada2+"% :"+(dada1-(dada1*dada2/100))+"€";
    }
}