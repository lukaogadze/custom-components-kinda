import {Component, Input, OnInit} from '@angular/core';
import * as moment from 'moment';
import {FormControl, NgForm, ValidatorFn} from '@angular/forms';

const GEO_DATE_FORMAT = "DD-MM-YYYY";

@Component({
    selector: 'ois-mat-datepicker',
    templateUrl: './ois-mat-datepicker.component.html',
    styleUrls: ['./ois-mat-datepicker.component.scss']
})
export class OisMatDatepickerComponent implements OnInit {
    @Input() readonly initialDate!: string | undefined | null;
    @Input() readonly label!: string;
    @Input() readonly controlName!: string;
    @Input() readonly form!: NgForm;
    @Input() readonly validators!: ValidatorFn[];

    private _momentDate: any;


    set momentDate(input: any) {
        this._momentDate = input;

        if (input) {
            const dateString = input.format(GEO_DATE_FORMAT);
            this.updateFormControl(dateString);
        } else {
            this.updateFormControl(input);
        }
    }

    get momentDate(): any {
        return this._momentDate;
    }

    ngOnInit(): void {
        this._momentDate = moment(this.initialDate!, GEO_DATE_FORMAT);
        this.initializeFormControl();
    }

    private initializeFormControl() {
        const validators = (this.validators !== undefined) ? [...this.validators] : [];
        this.form.form.addControl(this.controlName, new FormControl(this.initialDate, validators));
    }

    private updateFormControl(input: string) {
        this.form.controls[this.controlName].setValue(input);
    }


}
