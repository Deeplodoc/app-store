import { Component, OnInit } from '@angular/core';
import { BasketService } from './services/basket.service';

@Component({
    selector: 'app-store',
    templateUrl:'app/app.component.html',
    styleUrls: [ 'app/app.component.css' ],
    providers: [ BasketService ]
})
export class AppComponent implements OnInit {
    private basketCount: number;

    constructor(private basketService: BasketService){
        this.basketCount = 0;
    }

    ngOnInit(): void {
        this.basketCount = this.basketService.getBasketCount();
        this.basketService.onAddedToBasket.subscribe((count: number) => {
            this.basketCount = count;
        });
    }
}