import { Item } from '../models/item';

export class Basket{
    items: Item[] = [];
    totalPrice: number = 0;
}