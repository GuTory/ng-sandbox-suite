import { Component, Signal, computed, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  CommonModule,
  NgSwitch,
  NgSwitchCase,
  NgSwitchDefault,
} from '@angular/common';
import { ThemeService } from './utils/services/theme/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    NgSwitch,
    NgSwitchDefault,
    NgSwitchCase,
    RouterOutlet,
    CommonModule,
  ],
})
export class AppComponent {
  private themeService = inject(ThemeService);

  public isDarkEnabled: Signal<boolean> = computed(() =>
    this.themeService.isDarkEnabled()
  );
}
