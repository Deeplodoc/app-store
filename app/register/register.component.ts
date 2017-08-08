import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Response } from '@angular/http';
import { UserService } from '../services/user.service';
import { User } from '../models/user';

@Component({
    selector: 'register-app',
    templateUrl: 'app/register/register.component.html'
})

export class RegisterComponent{
    private registerForm: FormGroup;
    private user: User;

    constructor(private userService: UserService){
        this.registerForm = new FormGroup({
            "login": new FormControl("", [
                Validators.required,
                Validators.minLength(3)
            ]),
            "email": new FormControl("", [
                Validators.required,
                Validators.pattern("^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$")
            ]),
            "password": new FormControl("", Validators.required),
            "firstName": new FormControl(""),
            "lastName": new FormControl(""),
            "address": new FormControl(""),
            "bDay": new FormControl(""),
            "phone": new FormControl("")
        });
    }

    submit(): void{
        this.user = this.registerForm.value;
        this.user.id = null;
        this.user.isConfirm = false;
        this.user.confirmCode = null;
        this.user.resetPasswordCode = null;
        console.log(this.user);
        this.userService.register(this.registerForm.value)
    }
}