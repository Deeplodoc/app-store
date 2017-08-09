import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { LoginResponseModel } from '../models/login.response.model';
import { SessionName } from '../enums/session.name';
import { SessionService } from '../services/session.service';

@Component({
    selector: 'login-app',
    templateUrl: 'app/login/login.component.html'
})

export class LoginComponent{
    private error: any;
    private loginResponse: LoginResponseModel;
    public loginForm: FormGroup;

    constructor(private userService: UserService,
                private sessionService: SessionService){
        this.loginForm = new FormGroup({
            "login": new FormControl("", [
                Validators.required,
                Validators.minLength(3)
            ]),
            "password": new FormControl("", Validators.required)
        });
    }

    submit(): void{
        this.userService.login(this.loginForm.value)
        .subscribe(
            data => {
                this.loginResponse = data;
                this.sessionService.set(SessionName.Authorize, this.loginResponse);
            },
            error => {
                this.error = error;
                console.log(this.error);
            });
    }
}