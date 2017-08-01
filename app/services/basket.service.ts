import { Injectable, Output, EventEmitter } from '@angular/core';
import { Basket } from '../models/basket';
import { Item } from '../models/item';
import { ChanchedBasket } from '../models/eventModels/chanched.basket';
import { SessionService } from '../services/session.service';
import { SessionName } from '../enums/session.name';

@Injectable()
export class BasketService{
    private basket: Basket = new Basket();

    constructor(private sessionService: SessionService){
        this.getBasketSession();
    }

    @Output() сhangeBasketCount = new EventEmitter<ChanchedBasket>();

    add(item: Item): void{
        this.basket.addItem(item);
        this.sessionService.set(SessionName.Basket, this.basket);
        this.changeBasket();
    }

    remove(id: number): void{
        this.basket.removeItem(id);
        this.sessionService.set(SessionName.Basket, this.basket);
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
        this.сhangeBasketCount.emit(chanchedBasket);
    }

    private getBasketSession(): void{
        let sessionBasket: Basket = this.sessionService.get(SessionName.Basket);
        if(sessionBasket != null || sessionBasket != undefined){
            this.basket.items = sessionBasket.items;
            this.basket.totalPrice = sessionBasket.totalPrice;
        }
    }
}