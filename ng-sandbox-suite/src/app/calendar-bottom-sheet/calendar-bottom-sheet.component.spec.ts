import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarBottomSheetComponent } from './calendar-bottom-sheet.component';

describe('CalendarBottomSheetComponent', () => {
  let component: CalendarBottomSheetComponent;
  let fixture: ComponentFixture<CalendarBottomSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalendarBottomSheetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CalendarBottomSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
