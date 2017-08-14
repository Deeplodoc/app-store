import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Response } from '@angular/http';
import { Item } from '../models/item';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ItemService{
    constructor(private http: Http){}

    getItems(): Observable<Item[]>{
        return this.http.get('items.json')
        .map((response: Response) => {
            let itemsList = response.json();
            let items: Item[] = [];
            for(let index in itemsList){
                let item = itemsList[index];
                items.push({
                    id: item.id,
                    picture: /*item.picture*/"images/products/043.png",
                    name: item.name,
                    price: item.price,
                    description: item.description
                });
            }

            return items;
        })
        .catch((error: any) => { return Observable.throw(error) });
    }

    getById(id: number): Observable<Item>{
        return this.http.get('items.json')
        .map((response: Response) => {
            let itemsList = response.json();
            let item: Item = new Item();
            for(let index in itemsList){
                if(itemsList[index].id == id){
                    item.id = itemsList[index].id,
                    item.picture = itemsList[index].picture,
                    item.name = itemsList[index].name,
                    item.price = itemsList[index].price,
                    item.description = itemsList[index].description;
                    break;
                }
            }
            
            return item;
        })
    }
}