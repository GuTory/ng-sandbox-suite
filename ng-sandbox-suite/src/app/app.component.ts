import {Component, inject} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {CommonModule, NgSwitch, NgSwitchCase, NgSwitchDefault} from '@angular/common';
import {ThemeService} from './utils/services/theme/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [NgSwitch, NgSwitchDefault, NgSwitchCase, RouterOutlet, CommonModule]
})
export class AppComponent {
  title = 'ng-sandbox-suite';
  private themeService = inject(ThemeService);

  public isDarkEnabled: boolean = false;

  constructor() {
    this.themeService.IsDarkEnabled().subscribe({
      next: (isDarkEnabled) => {
        this.isDarkEnabled = isDarkEnabled;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  public toggleDarkmode() {
    this.themeService.toggleDarkmode();
  }
}
