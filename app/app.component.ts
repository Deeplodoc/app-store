import { Component, OnInit } from '@angular/core';
import { BasketService } from './services/basket.service';
import { ChanchedBasket } from './models/eventModels/chanched.basket';

@Component({
    selector: 'app-store',
    templateUrl:'app/app.component.html',
    styleUrls: [ 'app/app.component.css' ],
    providers: [ BasketService ]
})
export class AppComponent implements OnInit {
    private basketCount: number;
    private totalPrice: number;

    constructor(private basketService: BasketService){
        this.basketCount = 0;
        this.totalPrice = 0;
    }

    ngOnInit(): void {
        this.basketService.onChangeBasketCount.subscribe((item: ChanchedBasket) => {
            this.basketCount = item.itemCount;
            this.totalPrice = item.totalPrice;
        });
    }
}