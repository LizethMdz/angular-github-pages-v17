import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { routes } from '../../app.routes';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [
    CommonModule, RouterLink
  ],
  templateUrl : './side-menu.component.html',
  styleUrl: './side-menu.component.scss'
})
export class SideMenuComponent { 

  public menuItems = routes
  .map((route) => route.children ?? [])
  .flat()
  .filter((route) => route && route.path)
  .filter((route) => !route.path?.includes(':'));

}
