import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Response } from '@angular/http';
import { UserService } from '../services/user.service';
import { User } from '../models/user';

@Component({
    selector: 'register-app',
    templateUrl: 'app/register/register.component.html',
})

export class RegisterComponent implements OnInit{
    private registerForm: FormGroup;
    private user: User;
    private dateLocale: any;

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
            "phone": new FormControl(""),
            "bDay": new FormControl("")
        });
    }

    submit(): void{
        this.user = this.registerForm.value;
        this.user.id = null;
        this.user.isConfirm = false;
        this.user.confirmCode = null;
        this.user.resetPasswordCode = null;
        console.log(this.user);
        this.userService.register(this.registerForm.value);
    }

    ngOnInit(): void {
        this.dateLocale = {
            firstDayOfWeek: 0,
            dayNames: [ "понедельник", "вторник", "среда", "четверг", "пятница", "субботу", "воскресенье" ],
            dayNamesShort: [ "пн", "вт", "ср", "чт", "пт", "сб", "вс" ],
            dayNamesMin: [ "пн", "вт", "ср", "чт", "пт", "сб", "вс" ],
            monthNames: [ "январь", "февраль", "март", "апрель", "май", "июнь", "июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь" ],
            monthNamesShort: [ "янв", "фев", "мар", "апр", "май", "июл", "июн", "авг", "сен", "окт", "ноя", "дек" ]
        }
    }
}