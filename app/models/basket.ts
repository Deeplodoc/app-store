import { Item } from '../models/item';
import { ItemViewModel } from "./viewModels/item.view.model";

export class Basket{
    items: ItemViewModel[] = [];
    totalPrice: number = 0;

    getItems(): ItemViewModel[]{
        return this.items.sort((a, b): number => {
            if(a.item.id > b.item.id){
                return 1;
            }

            if(a.item.id < b.item.id){
                return -1
            }

            return 0;
        });
    }

    addItem(item: Item): void{
        if(item != null && item != undefined){
            if(this.exists(item.id)){
                let itemViewModel: ItemViewModel = this.getItemViewModelById(item.id);
                itemViewModel.count = itemViewModel.count + 1;
            }
            else{
                this.items.push({ 
                    item: item, 
                    count: 1 
                });
            }

            this.totalPrice += item.price;
        }
    }

    getTotalPrice(): number{
        return this.totalPrice;
    }

    getItemsCount(): number{
        if(this.items.length != 0){
            return this.items.map((item: ItemViewModel) => {
                return item.count;
            })
            .reduce((sum, current) => sum += current);
        }
        else{
            return 0;
        }
    }

    removeItem(id: number): void{
        let itemViewModel: ItemViewModel = this.getItemViewModelById(id);
        let index: number = this.items.indexOf(itemViewModel);

        if(index != -1){
            if(itemViewModel.count == 1){
                this.items.splice(index, 1);
            }
            else{
                itemViewModel.count = itemViewModel.count - 1;
            }

            this.totalPrice = this.totalPrice - itemViewModel.item.price;
        }
    }

    private getItemViewModelById(id: number): ItemViewModel{
        return this.items.find(item => item.item.id == id);
    }

    private exists(id: number): boolean{
        return this.items.map((item: ItemViewModel) => {
            return item.item.id;
        }).some(i => i == id);
    }
}