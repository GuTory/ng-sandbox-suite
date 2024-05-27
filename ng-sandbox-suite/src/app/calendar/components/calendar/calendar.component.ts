import { CommonModule } from '@angular/common';
import {
  Component,
  InputSignal,
  Signal,
  computed,
  signal,
  inject,
  WritableSignal,
  input,
} from '@angular/core';
import { DateTime, Info, Interval } from 'luxon';
import { HabitService } from '../../../utils/services/habit/habit.service';
import { Habit } from 'src/app/utils/models/habit.interface';
import {MatBadgeModule} from '@angular/material/badge';

@Component({
  selector: 'calendar',
  standalone: true,
  imports: [CommonModule, MatBadgeModule],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss',
})
export class CalendarComponent {
  DATE_MED = DateTime.DATE_MED;
  today: Signal<DateTime> = signal(DateTime.local());
  firstDayOfActiveMonth: WritableSignal<DateTime> = signal(
    this.today().startOf('month')
  );
  weekDays: Signal<string[]> = signal(Info.weekdays('short'));
  activeDay: WritableSignal<DateTime | null> = signal(null);
  daysOfMonth: Signal<DateTime[]> = computed(() => {
    return Interval.fromDateTimes(
      this.firstDayOfActiveMonth().startOf('week'),
      this.firstDayOfActiveMonth().endOf('month').endOf('week')
    )
      .splitBy({ day: 1 })
      .map((day: Interval) => {
        if (day.start === null) throw new Error('Wrong dates');
        return day.start;
      });
  });
  habits: InputSignal<Habit> = input.required();

  activeDayHabits: Signal<string[]> = computed(() => {
    const activeDay = this.activeDay();
    if (activeDay === null) return [];
    const activeDayISO = activeDay.toISODate();
    if (activeDayISO === null) return [];
    return this.habits().get(activeDayISO) ?? [];
  });

  dayOfWeekHabitCount(dayOfWeek: DateTime): number {
    return this.habits()
      .get(dayOfWeek.toISODate() ?? '')
      ?.length ?? 0;
  }

  public HabitService: HabitService = inject(HabitService);

  goToPreviousMonth(): void {
    this.firstDayOfActiveMonth.set(this.firstDayOfActiveMonth().minus({ month: 1 }));
  }

  goToNextMonth(): void {
    this.firstDayOfActiveMonth.set(this.firstDayOfActiveMonth().plus({ month: 1 }));
  }

  goToToday(): void {
    this.firstDayOfActiveMonth.set(this.today().startOf('month'));
  }

  setActiveDay(day: DateTime): void {
    this.activeDay.set(day);
    if( this.firstDayOfActiveMonth().month > day.month ) {
      this.goToNextMonth();
    } else if( this.firstDayOfActiveMonth().month < day.month ) {
      this.goToPreviousMonth();
    }
  }
}