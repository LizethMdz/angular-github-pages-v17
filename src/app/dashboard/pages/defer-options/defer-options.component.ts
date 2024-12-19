import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TitleComponent } from '../../../shared/title/title.component';
import { HeavyLoadersFastComponent } from '../../../shared/heavy-loaders/heavy-loaders-fast.component';

@Component({
  selector: 'app-defer-options',
  standalone: true,
  imports: [
    CommonModule, HeavyLoadersFastComponent, TitleComponent
  ],
  templateUrl: './defer-options.component.html',
  styleUrls: ['./defer-options.component.scss'],
})
export class DeferOptionsComponent { }
