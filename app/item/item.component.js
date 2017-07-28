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
var router_1 = require("@angular/router");
var item_service_1 = require("../services/item.service");
var basket_service_1 = require("../services/basket.service");
var item_1 = require("../models/item");
var ItemComponent = (function () {
    function ItemComponent(activateRoute, itemService, basketService) {
        this.activateRoute = activateRoute;
        this.itemService = itemService;
        this.basketService = basketService;
        this.item = new item_1.Item();
    }
    ItemComponent.prototype.addToBasket = function () {
        this.basketService.add(this.item);
    };
    ItemComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    ItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id;
        this.subscription = this.activateRoute.params
            .subscribe(function (params) { return id = params['id']; });
        this.itemService.getById(id)
            .subscribe(function (data) { return _this.item = data; }, function (error) {
            _this.error = error;
            console.log(error);
        });
    };
    return ItemComponent;
}());
ItemComponent = __decorate([
    core_1.Component({
        selector: 'item-info',
        templateUrl: 'app/item/item.component.html',
        providers: [item_service_1.ItemService]
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        item_service_1.ItemService,
        basket_service_1.BasketService])
], ItemComponent);
exports.ItemComponent = ItemComponent;
//# sourceMappingURL=item.component.js.map