import { Component, OnInit, TemplateRef } from '@angular/core';
import { BasketService } from './services/basket.service';
import { SessionService } from './services/session.service';
import { ChanchedBasket } from './models/eventModels/chanched.basket';
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

    constructor(private basketService: BasketService,
                private modalService: BsModalService){
        this.basketCount = this.basketService.getBasketCount();
        this.totalPrice = this.basketService.getTotalPrice();
    }

    public openModal(template: TemplateRef<any>): void{
        this.modalRef = this.modalService.show(template);
    }

    ngOnInit(): void {
        this.basketService.сhangeBasketCount.subscribe((item: ChanchedBasket) => {
            this.basketCount = item.itemCount;
            this.totalPrice = item.totalPrice;
        });
    }
}