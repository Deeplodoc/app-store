import { Injectable, Output, EventEmitter } from '@angular/core';
import { Basket } from '../models/basket';
import { Item } from '../models/item';
import { ChanchedBasket } from '../models/eventModels/chanched.basket';
@Injectable()
export class BasketService{
    private basket: Basket = new Basket();
    
    @Output() onChangeBasketCount = new EventEmitter<ChanchedBasket>();

    add(item: Item): void{
        this.basket.addItem(item);
        this.changeBasket();
    }

    remove(id: number): void{
        this.basket.removeItem(id);
        this.changeBasket();
    }

    getBasket(): Basket{
        return this.basket;
    }

    getItems(): Item[]{
        return this.basket.getItems();
    }

    getBasketCount(): number{
        return this.basket.getItemsCount();
    }

    getTotalPrice(): number{
        return this.basket.getTotalPrice();
    }

    private changeBasket(): void{
        let chanchedBasket: ChanchedBasket = {
            itemCount: this.basket.getItemsCount(),
            totalPrice: this.basket.getTotalPrice()
        }
        this.onChangeBasketCount.emit(chanchedBasket);
    }
}