import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService implements OnDestroy {
  private isDark: boolean;
  private isDarkEnabled: BehaviorSubject<boolean>;

  constructor() {
    this.isDark = localStorage.getItem('IsDarkEnabled') === 'true';
    this.isDarkEnabled = new BehaviorSubject<boolean>(this.isDark);
  }

  toggleDarkmode() {
    this.isDark = !this.isDark;
    this.isDarkEnabled.next(this.isDark);
    localStorage.setItem('IsDarkEnabled', this.isDark.toString());
  }

  IsDarkEnabled() : Observable<boolean> {
    return this.isDarkEnabled;
  }

  ngOnDestroy(): void {
    this.isDarkEnabled.complete();
    localStorage.removeItem('IsDarkEnabled');
  }
}
