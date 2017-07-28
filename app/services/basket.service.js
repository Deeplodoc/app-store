"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var basket_1 = require("../models/basket");
var BasketService = (function () {
    function BasketService() {
        this.basket = new basket_1.Basket();
    }
    BasketService.prototype.add = function (item) {
        if (item != null && item != undefined) {
            this.basket.items.push(item);
            this.basket.totalPrice += item.price;
        }
    };
    BasketService.prototype.getBasket = function () {
        return this.basket;
    };
    BasketService.prototype.getBasketCount = function () {
        return this.basket.items.length;
    };
    return BasketService;
}());
BasketService = __decorate([
    core_1.Injectable()
], BasketService);
exports.BasketService = BasketService;
//# sourceMappingURL=basket.service.js.map