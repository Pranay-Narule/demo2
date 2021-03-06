import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})

export class header{
    //added output to listen in parent
   @Output() featureSelected = new EventEmitter<string>();
    onSelect( feature: string ){
        this.featureSelected.emit(feature);
    }

}