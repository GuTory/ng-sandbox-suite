import { Injectable, OnDestroy, WritableSignal, signal } from '@angular/core';

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
      console.log('Dark mode enabled:', !isDark);
      return !isDark;
    });
  }

  ngOnDestroy(): void {
    localStorage.removeItem('IsDarkEnabled');
  }
}
