import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective {
    @HostBinding('class.open') isOpen = false; // Bind it to the css class Open to open or close

    @HostListener('click') toggleOpen() {
        this.isOpen = !this.isOpen; // If it's open, close, if close then open
    }
    constructor() {
        
    }
}