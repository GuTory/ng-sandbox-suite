import { Component, Inject, inject } from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'bottom-sheet-overview-example-sheet',
  standalone: true,
  imports: [MatListModule],
  templateUrl: './calendar-bottom-sheet.component.html',
  styleUrl: './calendar-bottom-sheet.component.scss'
})
export class CalendarBottomSheetComponent {
  private _bottomSheetRef: MatBottomSheetRef<CalendarBottomSheetComponent> = inject(MatBottomSheetRef);

  constructor(
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: string[]
  ) {}

  closeBottomSheetWithParameter(value: string | null): void {
    this._bottomSheetRef.dismiss(value);
  }
}
