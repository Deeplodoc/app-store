import { Component, OnInit, OnDestroy } from '@angular/core';
import { Response } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { UserService } from '../services/user.service';
import { User } from '../models/user';

@Component({
    selector: 'user-profile',
    templateUrl: 'app/user.profile/user.profile.component.html'
})

export class UserProfileComponent implements OnInit, OnDestroy{
    private userId: string;
    private paramsSubscription: Subscription;
    private user: User;
    private error: any;

    constructor(private userService: UserService,
    private activateRoute: ActivatedRoute){
        this.paramsSubscription = activateRoute.params
        .subscribe(params => this.userId = params['userId']);
        this.user = new User();
    }

    ngOnInit(): void {
        console.log(this.user);
        if(this.userId != null && this.userId != undefined){
            this.userService.getUserById(this.userId)
            .subscribe(
            data => {
                this.user = data;
                console.log(data);
            },
            error => {
                this.error = error;
                console.log(this.error);
            });
        }
    }

    ngOnDestroy(): void {
        this.paramsSubscription.unsubscribe();
    }
}