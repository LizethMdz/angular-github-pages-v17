import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TitleComponent } from '../../../shared/title/title.component';

type Grade = 'A'|'B'|'F';

@Component({
  selector: 'app-control-flow',
  standalone: true,
  imports: [
    CommonModule, RouterModule, TitleComponent
  ],
  templateUrl: './control-flow.component.html',
  styleUrls: ['./control-flow.component.scss'],
})
export class ControlFlowComponent { 

  public showContent = signal(false);
  public grade = signal<Grade>('A');

  public frameworks = signal(['Angular','Vue','Svelte','Qwik','React']);
  public frameworks2 = signal([]);


  public toggleContent() {
    this.showContent.update( value => !value );
  }
}
