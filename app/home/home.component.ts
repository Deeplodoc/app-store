import { Component, OnDestroy, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { SessionName } from '../enums/session.name';
import { SessionService } from '../services/session.service';
import { BsModalRef } from 'ngx-bootstrap';
import { BsModalService } from 'ngx-bootstrap';

@Component({
    selector: 'home-app',
    templateUrl: 'app/home/home.component.html'
})
export class HomeComponent implements OnDestroy, OnInit{
    private querySubscription: Subscription;
    private userId: string;
    private code: string;
    private error: any;
    private modalRef: BsModalRef;
    @ViewChild('confirmTemplate') confirmTemplate: BsModalRef;

    constructor(private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private sessionService: SessionService,
    private modalService: BsModalService){
        this.querySubscription = route.queryParams.subscribe(
            (queryParams: any) => {
                this.userId = queryParams['userId'];
                this.code = queryParams['code'];
            }  
        );
    }

    public openModal(): void{
        this.modalRef = this.modalService.show(this.confirmTemplate);
    }

    ngOnInit(): void {
        if(this.userId != null && this.userId != undefined &&
        this.code != null && this.code != undefined){
            this.userService.confirm(this.userId, this.code)
            .subscribe(
            data => {
                console.log(data);
                this.sessionService.set(SessionName.Authorize, data);
                this.router.navigate(
                    ['/profile', this.userId]
                );
            },
            error => {
                this.error = error;
                console.log(this.error);
                this.openModal();
            });
        }
    }

    ngOnDestroy(): void {
        this.querySubscription.unsubscribe();
    }
}