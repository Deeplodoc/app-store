import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
    selector: 'login-app',
    templateUrl: 'app/login/login.component.html'
})

export class LoginComponent{
    public loginForm: FormGroup;

    constructor(private userService: UserService){
        this.loginForm = new FormGroup({
            "login": new FormControl("", [
                Validators.required,
                Validators.minLength(3)
            ]),
            "password": new FormControl("", Validators.required)
        });
    }
}