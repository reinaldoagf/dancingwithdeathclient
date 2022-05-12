import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { format, register } from 'timeago.js';
import * as moment from 'moment';
@Directive({
    selector: '[timeAgo]'
})
export class TimeAgoDirective {
    constructor(
        private elementRef: ElementRef,
        private renderer: Renderer2
    ) {
        register('es_ES', (number, index, total_sec) : any => [
            ['Justo ahora', 'Ahora mismo'],
            ['Hace %s segundos', 'En %s segundos'],
            ['Hace 1 minuto', 'En 1 minuto'],
            ['Hace %s minutos', 'En %s minutos'],
            ['Hace 1 hora', 'En 1 hora'],
            ['Hace %s horas', 'En %s horas'],
            ['Hace 1 dia', 'En 1 dia'],
            ['Hace %s dias', 'En %s dias'],
            ['Hace 1 semana', 'En 1 semana'],
            ['Hace %s semanas', 'En %s semanas'],
            ['1 mes', 'En 1 mes'],
            ['Hace %s meses', 'En %s meses'],
            ['Hace 1 año', 'En 1 año'],
            ['Hace %s años', 'En %s años']
        ][index]);
    }
    @Input() set timeAgo(item: any) {
        this.elementRef.nativeElement.style.background = moment(item.date, 'DD/MM/yyyy').format('MM') > moment(new Date()).format('MM') ?
            'rgb(0 150 64)' : (
                moment(item.date, 'DD/MM/yyyy').format('MM') < moment(new Date()).format('MM') ?
                    'rgb(172 0 59)' : 'rgb(255 145 39)'
            )
            this.elementRef.nativeElement.innerHTML = format(moment(item.date, 'DD/MM/yyyy').format('YYYY/MM/DD'),'es_ES')
    }
}