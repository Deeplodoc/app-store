import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Response } from '@angular/http';
import { UserService } from '../services/user.service';

@Component({
    selector: 'reset-password',
    templateUrl: 'app/reset.password/reset.password.component.html'
})

export class ResetPassword{
    private isExists: boolean;
    private isReady: boolean;
    private resetPassword: FormGroup;
    private error: any;

    constructor(private userService: UserService){
        this.isExists = true;
        this.isReady = false;
        this.resetPassword = new FormGroup({
            email: new FormControl("", [
                Validators.required,
                Validators.pattern("^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$")
            ])
        });
    }

    submit(){
        this.isExists = true;
        this.userService.forgotPassword(this.resetPassword.value.email)
        .subscribe(
            data => {
                this.isExists = data;
                this.isReady = true;
            },
            error => {
                this.error = error;
                this.isExists = false;
                console.log(this.error);
            });
    }
}