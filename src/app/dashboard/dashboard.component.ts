import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SideMenuComponent } from '../shared/side-menu/side-menu.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule, RouterModule, SideMenuComponent
  ],
  templateUrl : './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent { }
