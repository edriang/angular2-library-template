import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibDemoComponent } from './';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        LibDemoComponent
    ],
    exports: [
        LibDemoComponent
    ]
})
export class LibModule { }
