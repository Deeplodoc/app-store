import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
    selector: 'login-app',
    templateUrl: 'app/login/login.component.html'
})

export class LoginComponent{
    constructor(private userService: UserService){}

    login(loginForm: NgForm): void{
        this.userService.login(loginForm.value.login, loginForm.value.password);
    }
}