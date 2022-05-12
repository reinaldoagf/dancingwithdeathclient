import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import * as moment from 'moment';
@Directive({
    selector: '[boxTheme]'
})
export class BoxThemeDirective {
    constructor(
        private elementRef: ElementRef,
        private renderer: Renderer2
    ) {
    }
    @Input() set boxTheme(item: any) {
        this.elementRef.nativeElement.style.background = moment(item.date, 'DD/MM/yyyy').format('MM') > moment(new Date()).format('MM') ?
            '#c8f7dc' : (
                moment(item.date, 'DD/MM/yyyy').format('MM') < moment(new Date()).format('MM') ?
                    '#ffd3e2' : '#fee4cb'
            )
    }
}