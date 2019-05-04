import {Component} from '@angular/core';
import {NgForm, Validators} from '@angular/forms';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    dateValidators = [Validators.required];

    dump(form: NgForm) {
        console.log(form.value);
    }


}
