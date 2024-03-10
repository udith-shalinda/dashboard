import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingComponent } from './setting/setting.component';
import { ElementViewComponent } from './dashboard/element-view/element-view.component';

export const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'setting', component: SettingComponent },
  { path: 'dashboard/element', component: ElementViewComponent },
  { path: '', redirectTo: '/setting', pathMatch: 'full' },
];
