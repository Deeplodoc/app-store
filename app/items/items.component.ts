import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { ItemService } from '../services/item.service';
import { Item } from '../models/item';

@Component({
    selector: 'items-app',
    templateUrl: 'app/items/items.component.html',
    styleUrls: [ 'app/items/items.component.css' ],
    providers: [ ItemService ]
})
export class ItemsComponent implements OnInit{
    items: Item[] = [];
    error: any;

    constructor(private itemService: ItemService){}

    ngOnInit(): void {
        this.itemService.getItems()
        .subscribe(
            data => this.items = data,
            error => { 
                this.error = error;
                console.log(error); 
            }
        )
    }
}