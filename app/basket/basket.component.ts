import { Component, OnInit } from '@angular/core';
import { BasketService } from '../services/basket.service';
import { Item } from '../models/item';
import { ChanchedBasket } from '../models/eventModels/chanched.basket';
import { ItemViewModel } from "../models/viewModels/item.view.model";

@Component({
    selector: 'basket-app',
    templateUrl: 'app/basket/basket.component.html'
})
export class BasketComponent implements OnInit{
    private items: ItemViewModel[];
    private totalPrice: number;

    constructor(private basketServices: BasketService){
        this.items = [];
        this.totalPrice = 0;
    }

    ngOnInit(): void {
        this.items = this.basketServices.getItems();
        this.totalPrice = this.basketServices.getTotalPrice();
        this.basketServices.сhangeBasketCount.subscribe((item: ChanchedBasket) => {
            this.totalPrice = item.totalPrice;
        });
    }

    removeItem(id: number): void{
        this.basketServices.remove(id);
    }
}