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
var item_service_1 = require("../services/item.service");
var basket_service_1 = require("../services/basket.service");
var ItemsComponent = (function () {
    function ItemsComponent(itemService, basketService) {
        this.itemService = itemService;
        this.basketService = basketService;
        this.items = [];
    }
    ItemsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.itemService.getItems()
            .subscribe(function (data) { return _this.items = data; }, function (error) {
            _this.error = error;
            console.log(error);
        });
    };
    ItemsComponent.prototype.onAddToBasket = function (item) {
        this.basketService.add(item);
    };
    return ItemsComponent;
}());
ItemsComponent = __decorate([
    core_1.Component({
        selector: 'items-app',
        templateUrl: 'app/items/items.component.html',
        styleUrls: ['app/items/items.component.css'],
        providers: [item_service_1.ItemService]
    }),
    __metadata("design:paramtypes", [item_service_1.ItemService,
        basket_service_1.BasketService])
], ItemsComponent);
exports.ItemsComponent = ItemsComponent;
//# sourceMappingURL=items.component.js.map