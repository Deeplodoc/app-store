import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../services/user.service';
import { User } from '../models/user';

@Component({
    selector: 'register-app',
    templateUrl: 'app/register/register.component.html'
})

export class RegisterComponent{
    private user: User = new User();

    constructor(private userService: UserService){}

    register(): void{
        this.userService.register(this.user);
    }
}