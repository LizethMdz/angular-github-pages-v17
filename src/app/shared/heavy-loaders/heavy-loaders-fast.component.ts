import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-heavy-loaders-fast',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
    <section [ngClass]="['w-full', cssClass ]">
      <ng-content />
    </section>
  `,
  styleUrl: './heavy-loaders-low.component.scss'
})
export class HeavyLoadersFastComponent {

  @Input({ required: true }) cssClass!: string;

  constructor() {
    console.log('HeavyLoader Fast creado');
  }
}
