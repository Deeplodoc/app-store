import { Item } from '../models/item';

export class Basket{
    private items: Item[] = [];
    private totalPrice: number = 0;

    getItems(): Item[]{
        return this.items.sort((a, b): number => {
            if(a.id > b.id){
                return 1;
            }

            if(a.id < b.id){
                return -1
            }

            return 0;
        });
    }

    addItem(item: Item): void{
        if(item != null && item != undefined){
            this.items.push(item);
            this.totalPrice += item.price;
        }
    }

    getTotalPrice(): number{
        return this.totalPrice;
    }

    getItemsCount(): number{
        return this.items.length;
    }

    removeItem(id: number): void{
        let item: Item = this.items.find(item => item.id == id);
        let index: number = this.items.indexOf(item);

        if(index != -1){
            this.items.splice(index, 1);
            this.totalPrice = this.totalPrice - item.price;
        }
    }
}