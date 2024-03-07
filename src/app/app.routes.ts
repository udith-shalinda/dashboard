import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingComponent } from './setting/setting.component';

export const routes: Routes = [
    {path: 'dashboard', component: DashboardComponent},
    {path: 'setting', component: SettingComponent},
    {path: '', redirectTo: '/setting', pathMatch: 'full'},
];
