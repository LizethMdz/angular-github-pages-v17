import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TitleComponent } from '../../../shared/title/title.component';
import { HeavyLoadersLowComponent } from '../../../shared/heavy-loaders/heavy-loaders-low.component';

@Component({
  selector: 'app-defer-views',
  standalone: true,
  imports: [
    CommonModule, TitleComponent, HeavyLoadersLowComponent
  ],
  templateUrl: './defer-views.component.html',
  styleUrls: ['./defer-views.component.scss']
})
export class DeferViewsComponent { }
