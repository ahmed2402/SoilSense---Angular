import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { UsersComponent } from './pages/users/users.component';
import { SitesComponent } from './pages/sites/sites.component';
import { TestsComponent } from './pages/tests/tests.component';
import { TestsTypesComponent } from './pages/tests-types/tests-types.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

export const routes: Routes = [

    {
        path:'',
        redirectTo:'login',
        pathMatch:'full'  
    },
    {
        path:'login',
        component: LoginComponent
    },
    {
        path : '',
        component: LayoutComponent,
        children :[
            {
                path : 'users',
                component : UsersComponent
            },
            {
                path : 'sites',
                component : SitesComponent
            },
            {
                path : 'tests',
                component : TestsComponent
            },
            {
                path:'tests-types',
                component : TestsTypesComponent
            },
            {
                path: 'dashboard',
                component : DashboardComponent
            }
        ]
    }
];
