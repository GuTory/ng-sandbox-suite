import { Injectable } from '@angular/core';
import { Habit } from '../../models/habit.interface';

@Injectable({
  providedIn: 'root'
})
export class HabitService {

  habits: Habit = new Map([
    ['2024-05-05', ['Drink water', 'Exercise', 'Read a book']],
    ['2024-05-06', ['Alibi footsal', 'Exercise', 'cook']],
    ['2024-05-09', ['Learn anguular', 'Hit chest', 'Read a book']],
    ['2024-05-24', ['MU WIN', 'Hit chest', 'Read a book']],
  ]);

  constructor() { }

  getHabits(): Habit {
    return this.habits;
  }
}
