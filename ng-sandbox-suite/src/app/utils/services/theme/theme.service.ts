import { Injectable, OnDestroy, WritableSignal, signal } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ThemeService implements OnDestroy {
  public isDarkEnabled: WritableSignal<boolean> = signal(
    localStorage.getItem('IsDarkEnabled') === 'true'
  );

  toggleDarkmode() {
    this.isDarkEnabled.update((isDark: boolean) => {
      localStorage.setItem('IsDarkEnabled', (!isDark).toString());
      if (!environment.production) console.log('Dark mode enabled:', !isDark);
      return !isDark;
    });
  }

  ngOnDestroy(): void {
    localStorage.removeItem('IsDarkEnabled');
  }
}
