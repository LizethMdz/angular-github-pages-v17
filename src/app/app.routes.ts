import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChangeDetectionComponent } from './dashboard/pages/change-detection/change-detection.component';
import { DeferOptionsComponent } from './dashboard/pages/defer-options/defer-options.component';
import { ControlFlowComponent } from './dashboard/pages/control-flow/control-flow.component';
import { DeferViewsComponent } from './dashboard/pages/defer-views/defer-views.component';
import { UserComponent } from './dashboard/pages/user/user.component';
import { UsersComponent } from './dashboard/pages/users/users.component';
import { ViewTransitionComponent } from './dashboard/pages/view-transition/view-transition.component';
import { ViewTransition2Component } from './dashboard/pages/view-transition/view-transition-2.component';

export const routes: Routes = [

    {
        path: 'dashboard',
        component : DashboardComponent,
        // loadComponent: () : any => import('./dashboard/dashboard.component'),
        children: [
            {
                path: 'change-detection',
                title: 'Change Detection',
                component : ChangeDetectionComponent
            },
            {
                path: 'control-flow',
                title: 'Control Flow',
                component : ControlFlowComponent
            },
            {
                path: 'defer-options',
                title: 'Defer Options',
                component : DeferOptionsComponent
            },
            {
                path: 'defer-views',
                title: 'Defer Views',
                component : DeferViewsComponent
            },
            {
                path: 'user/:id',
                title: 'User View',
                component : UserComponent
            },
            {
                path: 'user-list',
                title: 'User List',
                component : UsersComponent
            },
            {
                path: 'view-transition',
                title: 'View Transition',
                component : ViewTransitionComponent
            },
            {
                path: 'view-transition2',
                title: 'View Transition 2',
                component : ViewTransition2Component
            },
            {
                path: '', redirectTo: 'control-flow', pathMatch: 'full',
            }
        ]
    },
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    }



];