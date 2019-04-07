import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/user.model';


@Component({
    selector: 'app-user-form',
    templateUrl: './user-form.component.html',
    styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent implements OnInit {

    @ViewChild('userForm')
    userForm: NgForm;

    @Input()
    user: User = {
        name: null,
        email: null,
        login: null,
        password: null
    };
    confirmPassword: string;

    constructor() { }

    ngOnInit() {
    }

}
