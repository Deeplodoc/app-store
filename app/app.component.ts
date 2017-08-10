import { Component, OnInit, TemplateRef } from '@angular/core';
import { BasketService } from './services/basket.service';
import { UserService } from './services/user.service';
import { SessionService } from './services/session.service';
import { ChanchedBasket } from './models/eventModels/chanched.basket';
import { LoginResponseModel } from './models/login.response.model';
import { SessionName } from './enums/session.name';
import { BsModalService } from 'ngx-bootstrap';
import { BsModalRef } from 'ngx-bootstrap';

@Component({
    selector: 'app-store',
    templateUrl:'app/app.component.html',
    styleUrls: [ 'app/app.component.css' ]
})
export class AppComponent implements OnInit {
    private basketCount: number;
    private totalPrice: number;
    private modalRef: BsModalRef;
    private userId: string;

    constructor(private basketService: BasketService,
    private modalService: BsModalService,
    private userService: UserService,
    private sessionService: SessionService){
        this.basketCount = this.basketService.getBasketCount();
        this.totalPrice = this.basketService.getTotalPrice();

        let loginModel: LoginResponseModel = this.sessionService.get(SessionName.Authorize);
        if(loginModel != null && loginModel != undefined){
            this.userId = loginModel.userId;
        }
    }

    public openModal(template: TemplateRef<any>): void{
        this.modalRef = this.modalService.show(template);
    }
    
    public exit(){
        this.sessionService.remove(SessionName.Authorize);
        this.userId = null;
    }

    ngOnInit(): void {
        this.basketService.сhangeBasketCount.subscribe((item: ChanchedBasket) => {
            this.basketCount = item.itemCount;
            this.totalPrice = item.totalPrice;
        });

        this.userService.loginUser.subscribe((item: LoginResponseModel) => {
            this.userId = item.userId;
            this.modalRef.hide();
        });
    }
}