import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'textoActivo'
})
export class TextoActivoPipe implements PipeTransform {
    transform(value: string): string {
        return (value === '1') ? 'SI' : 'NO';
    }
}
