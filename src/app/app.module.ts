import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {
    DateAdapter,
    MAT_DATE_LOCALE,
    MatButtonModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MAT_DATE_FORMATS} from '@angular/material';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MomentDateAdapter} from '@angular/material-moment-adapter';
import { OisMatDatepickerComponent } from './components/ois-mat-datepicker/ois-mat-datepicker.component';

export const KA_FORMAT = {
    parse: {
        dateInput: 'DD/MM/YYYY',
    },
    display: {
        dateInput: 'DD/MM/YYYY',
        monthYearLabel: 'MMM YYYY',
        dateA11yLabel: 'LL',
        monthYearA11yLabel: 'MMMM YYYY',
    },
};


@NgModule({
    declarations: [
        AppComponent,
        OisMatDatepickerComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        NoopAnimationsModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        MatDatepickerModule,
        MatButtonModule,
        ReactiveFormsModule
    ],
    providers: [
        {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
        {provide: MAT_DATE_FORMATS, useValue: KA_FORMAT}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
