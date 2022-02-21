import { Pipe, PipeTransform } from "@angular/core";
@Pipe({
    name: 'filtro'
})
export class FiltroPipe implements PipeTransform{

    transform(value: Array<any>, arg: string) {
        if(arg == '' || arg.length < 3){
            
            return value;
        } 
        const resultadoView = [];

        for(let view of value){
            if(view.nome.toString().toLowerCase().indexOf(arg.toLowerCase()) > -1){
                resultadoView.push(view);
            };
        };

        return resultadoView;
    }
}