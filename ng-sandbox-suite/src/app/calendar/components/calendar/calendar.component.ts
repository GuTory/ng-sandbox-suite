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
  OnInit,
  Inject,
} from '@angular/core';
import { DateTime, Info, Interval } from 'luxon';
import { HabitService } from '../../../utils/services/habit/habit.service';
import { Habit } from 'src/app/utils/models/habit.interface';
import { MatListModule } from '@angular/material/list';
import {
  MAT_BOTTOM_SHEET_DATA,
  MatBottomSheet,
  MatBottomSheetRef,
} from '@angular/material/bottom-sheet';
import { CalendarBottomSheetComponent } from 'src/app/calendar-bottom-sheet/calendar-bottom-sheet.component';

@Component({
  selector: 'calendar',
  standalone: true,
  imports: [CommonModule, MatListModule],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss',
})
export class CalendarComponent implements OnInit {
  /**
   * The habits to display in the calendar received as input.
   */
  habits: InputSignal<Habit> = input.required();

  private _bottomSheet: MatBottomSheet = inject(MatBottomSheet);

  openBottomSheet(): void {
    this._bottomSheet
      .open(CalendarBottomSheetComponent, {
        data: this.activeDayHabits(),
      })
      .afterDismissed()
      .subscribe((result: string | null) => {
        if (result !== undefined) {
          console.log('Bottom sheet closed with:', result);
        }
      });
  }

  /**
   * The current date context.
   */
  todayContext = input.required();

  ngOnInit(): void {
    console.log('Habits');
    console.log(this.todayContext());
  }

  /**
   * The habit service.
   */
  public HabitService: HabitService = inject(HabitService);

  /**
   * The date format to use for the calendar.
   */
  DATE_MED = DateTime.DATE_MED;

  /**
   * The current date.
   */
  today: Signal<DateTime> = signal(DateTime.local());

  /**
   * The first day of the active month.
   */
  firstDayOfActiveMonth: WritableSignal<DateTime> = signal(
    this.today().startOf('month')
  );

  /**
   * The week days to display in the calendar.
   */
  weekDays: Signal<string[]> = signal(Info.weekdays('short'));

  /**
   * The active day in the calendar.
   */
  activeDay: WritableSignal<DateTime | null> = signal(null);

  /**
   * The days of the active month.
   */
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

  /**
   * Habits for the active day.
   */
  activeDayHabits: Signal<string[]> = computed(() => {
    const activeDay = this.activeDay();
    if (activeDay === null) return [];
    const activeDayISO = activeDay.toISODate();
    if (activeDayISO === null) return [];
    return this.habits().get(activeDayISO) ?? [];
  });

  /**
   * The number of habits for the parameter.
   * @param dayOfWeek day of the week
   * @returns number of habits for the day of the week
   */
  dayOfWeekHabitCount(dayOfWeek: DateTime): number {
    return this.habits().get(dayOfWeek.toISODate() ?? '')?.length ?? 0;
  }

  /**
   * Event function to go to the previous month.
   */
  goToPreviousMonth(): void {
    this.firstDayOfActiveMonth.set(
      this.firstDayOfActiveMonth().minus({ month: 1 })
    );
  }

  /**
   * Event function to go to the next month.
   */
  goToNextMonth(): void {
    this.firstDayOfActiveMonth.set(
      this.firstDayOfActiveMonth().plus({ month: 1 })
    );
  }

  /**
   * Event function to go to today.
   */
  goToToday(): void {
    this.firstDayOfActiveMonth.set(this.today().startOf('month'));
  }

  /**
   * Set the active day.
   * @param day the day to set as active
   */
  setActiveDay(day: DateTime): void {
    this.activeDay.set(day);
    if (this.firstDayOfActiveMonth().month > day.month) {
      this.goToNextMonth();
    } else if (this.firstDayOfActiveMonth().month < day.month) {
      this.goToPreviousMonth();
    }
  }
}
