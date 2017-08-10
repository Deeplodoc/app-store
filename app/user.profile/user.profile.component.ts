import { Component, OnInit, OnDestroy, TemplateRef } from '@angular/core';
import { Response } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { UserService } from '../services/user.service';
import { User } from '../models/user';
import { BsModalService } from 'ngx-bootstrap';
import { BsModalRef } from 'ngx-bootstrap';

@Component({
    selector: 'user-profile',
    templateUrl: 'app/user.profile/user.profile.component.html'
})

export class UserProfileComponent implements OnInit, OnDestroy{
    private userId: string;
    private paramsSubscription: Subscription;
    private user: User;
    private error: any;
    private isSuccessSendConfirm: boolean;
    private errorSendConfirm: any;
    private isConfirm: boolean;
    private modalRef: BsModalRef;

    constructor(private userService: UserService,
    private activateRoute: ActivatedRoute,
    private modalService: BsModalService){
        this.paramsSubscription = activateRoute.params
        .subscribe(params => this.userId = params['userId']);
    }

    confirmEmail(){
        this.userService.sendMailConfirm(String(this.user.id))
        .subscribe(
            data => {
                this.isSuccessSendConfirm = true;
            },
            error => {
                this.errorSendConfirm = error;
                console.log(this.error);
            }
        )
    }

    public openModal(template: TemplateRef<any>): void{
        this.modalRef = this.modalService.show(template);
    }

    ngOnInit(): void {
        if(this.userId != null && this.userId != undefined){
            this.userService.getUserById(this.userId)
            .subscribe(
            data => {
                this.user = data;
                this.isConfirm = this.user.isConfirm;
            },
            error => {
                this.error = error;
            });
        }
    }

    ngOnDestroy(): void {
        this.paramsSubscription.unsubscribe();
    }
}