import { Common } from './square-calendar.common';

declare let com: any;

export class SquareCalendar extends Common {
    private _androidViewId: number;
    nativeViewProtected: any;

    public createNativeView() {
        let nextYear = java.util.Calendar.getInstance();
        nextYear.add(java.util.Calendar.YEAR, 1);
        
        const calendarView = new com.squareup.timessquare.CalendarPickerView(this._context, null);
        const today = new java.util.Date();
        calendarView.init(today, nextYear.getTime())
            .withSelectedDate(today);

        return calendarView;
    }

    public initNativeView(): void {
        super.initNativeView();
        this._androidViewId = android.view.View.generateViewId();
        this.nativeView.setId(this._androidViewId); 
    }

    // public disposeNativeView() {
    //     const nativeView: any = this.nativeViewProtected;
    //     super.disposeNativeView();
    // }

}