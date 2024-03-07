import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { DashboardComponent } from "./dashboard/dashboard.component";
import { NavigationComponent } from "./navigation/navigation.component";
import { SettingComponent } from './setting/setting.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, DashboardComponent, NavigationComponent, SettingComponent, RouterLink]
})
export class AppComponent {
  title = 'techsheq-test-project';
}
