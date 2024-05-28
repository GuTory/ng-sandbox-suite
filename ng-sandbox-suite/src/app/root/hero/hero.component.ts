import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from 'src/app/calendar/components/calendar/calendar.component';
import { HabitService } from '../../utils/services/habit/habit.service';
import { ThemeService } from 'src/app/utils/services/theme/theme.service';

@Component({
  selector: 'hero',
  standalone: true,
  imports: [CommonModule, CalendarComponent],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  private themeService = inject(ThemeService);


  HabitService: HabitService = inject(HabitService);

  public toggleDarkmode() {
    this.themeService.toggleDarkmode();
  }
}
