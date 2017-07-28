import { Injectable, Output, EventEmitter } from '@angular/core';
import { Basket } from '../models/basket';
import { Item } from '../models/item';

@Injectable()
export class BasketService{
    basket: Basket = new Basket();
    
    @Output() onAddedToBasket = new EventEmitter<number>();

    add(item: Item): void{
        if(item != null && item != undefined){
            this.basket.items.push(item);
            this.basket.totalPrice += item.price;
            this.onAddedToBasket.emit(this.basket.items.length);
        }
    }

    getBasket(): Basket{
        return this.basket;
    }

    getBasketCount(): number{
        return this.basket.items.length;
    }
}