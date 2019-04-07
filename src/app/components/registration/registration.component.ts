import { Component, OnInit, ViewChild } from '@angular/core';
import { UserFormComponent } from '../user-form/user-form.component';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

    @ViewChild('form')
    form: UserFormComponent;

    constructor(private userService: UserService, public router: Router) { }

    ngOnInit() {
    }

    saveUser() {
        this.userService.saveUser(this.form.user).subscribe((data) => {
            console.log(data);
            this.router.navigate(['home']);
        });
    }

}
