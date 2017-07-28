import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { ItemService } from '../services/item.service';
import { Item } from '../models/item';

@Component({
    selector: 'item-info',
    templateUrl: 'app/item/item.component.html',
    providers: [ ItemService ]
})
export class ItemComponent implements OnInit, OnDestroy{
    private item: Item = new Item();
    private subscription: Subscription;
    private error: any;

    constructor(private activateRoute: ActivatedRoute,
                private itemService: ItemService){}

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    ngOnInit(): void {
        let id: number;
        this.subscription = this.activateRoute.params
        .subscribe(params => id = params['id']);

        this.itemService.getById(id)
        .subscribe(
            data => this.item = data,
            error => {
                this.error = error;
                console.log(error);
            }
        )
    }
}