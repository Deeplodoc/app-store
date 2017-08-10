import { Component, OnDestroy } from '@angular/core';
import { Response } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
    selector: 'forgot-password',
    templateUrl: 'app/forgot.password/forgot.password.component.html'
})

export class ForgotPasswordComponent implements OnDestroy{
    private forgotForm: FormGroup;
    private paramsSubscription: Subscription;
    private email: string;
    private code: string;
    private error: any;
    private isReady: boolean;

    constructor(private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private router: Router){
        this.paramsSubscription = activatedRoute.queryParams.subscribe(
            (queryParams) => {
                this.email = queryParams['email'];
                this.code = queryParams['code'];

                if(this.email == null && this.email == undefined &&
                this.code == null && this.code == undefined){
                    this.router.navigate(
                        ['notFound']
                    );
                }
            }
        );

        this.forgotForm = new FormGroup({
             password: new FormControl("", Validators.required),
             confirmPassword: new FormControl("", Validators.required)
        }, this.passwordMatchValidator);
    }

    submit(){
        this.userService.resetPassword(this.email, this.code, this.forgotForm.value.password)
        .subscribe(
            data => {
                this.isReady = true;
            },
            error => {
                this.error = error;
                this.isReady = false;
                console.log(this.error);
            });
    }

    ngOnDestroy(): void {
        this.paramsSubscription.unsubscribe();
    }

    private passwordMatchValidator(g: FormGroup){
        return g.value.password == g.value.confirmPassword
        ? null : { 'mismatch': true };
    }
}