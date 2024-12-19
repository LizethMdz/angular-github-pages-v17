import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  selector: 'app-view-transition-1',
  standalone: true,
  imports: [
    CommonModule, TitleComponent
  ],
  templateUrl : './view-transition.component.html',
  styleUrls: ['./view-transition.component.scss'],
})
export class ViewTransitionComponent { }
