import { Component, OnInit } from '@angular/core';
import { BasketService } from './services/basket.service';
import { SessionService } from './services/session.service';
import { ChanchedBasket } from './models/eventModels/chanched.basket';
import { SessionName } from './enums/session.name';

@Component({
    selector: 'app-store',
    templateUrl:'app/app.component.html',
    styleUrls: [ 'app/app.component.css' ]
})
export class AppComponent implements OnInit {
    private basketCount: number;
    private totalPrice: number;

    constructor(private basketService: BasketService){
        this.basketCount = this.basketService.getBasketCount();
        this.totalPrice = this.basketService.getTotalPrice();
    }

    ngOnInit(): void {
        this.basketService.сhangeBasketCount.subscribe((item: ChanchedBasket) => {
            this.basketCount = item.itemCount;
            this.totalPrice = item.totalPrice;
        });
    }
}