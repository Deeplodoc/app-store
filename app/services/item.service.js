"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var item_1 = require("../models/item");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
var ItemService = (function () {
    function ItemService(http) {
        this.http = http;
    }
    ItemService.prototype.getItems = function () {
        return this.http.get('items.json')
            .map(function (response) {
            var itemsList = response.json();
            var items = [];
            for (var index in itemsList) {
                var item = itemsList[index];
                items.push({
                    id: item.id,
                    picture: /*item.picture*/ "images/products/043.png",
                    name: item.name,
                    price: item.price,
                    description: item.description
                });
            }
            return items;
        })
            .catch(function (error) { return Observable_1.Observable.throw(error); });
    };
    ItemService.prototype.getById = function (id) {
        return this.http.get('items.json')
            .map(function (response) {
            var itemsList = response.json();
            var item = new item_1.Item();
            for (var index in itemsList) {
                if (itemsList[index].id == id) {
                    item.id = itemsList[index].id,
                        item.picture = itemsList[index].picture,
                        item.name = itemsList[index].name,
                        item.price = itemsList[index].price,
                        item.description = itemsList[index].description;
                    break;
                }
            }
            return item;
        });
    };
    return ItemService;
}());
ItemService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ItemService);
exports.ItemService = ItemService;
//# sourceMappingURL=item.service.js.map