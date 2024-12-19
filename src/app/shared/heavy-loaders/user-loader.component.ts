import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-user-loader',
    standalone : true,
    imports : [CommonModule],
    template: `<h1>Hola mundo</h1>`,
    styleUrl: `./user-loader.component.scss`
})
export class UserLoaderComponent implements OnInit {
    constructor() { }

    ngOnInit(): void { }
}
