import { Injectable } from '@angular/core';
import { Basket } from '../models/basket';
import { Item } from '../models/item';

@Injectable()
export class BasketService{
    basket: Basket = new Basket();

    add(item: Item): void{
        if(item != null && item != undefined){
            this.basket.items.push(item);
            this.basket.totalPrice += item.price;
        }
    }

    getBasket(): Basket{
        return this.basket;
    }

    getBasketCount(): number{
        return this.basket.items.length;
    }
}