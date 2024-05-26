import { Routes } from '@angular/router';
import { HeroComponent } from './root/hero/hero.component';
import { CalendarComponent } from './calendar/components/calendar/calendar.component';

export const routes: Routes = [
  {
    path: '',
    component: HeroComponent,
  }
];
