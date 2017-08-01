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
var basket_1 = require("../models/basket");
var session_service_1 = require("../services/session.service");
var session_name_1 = require("../enums/session.name");
var BasketService = (function () {
    function BasketService(sessionService) {
        this.sessionService = sessionService;
        this.basket = new basket_1.Basket();
        this.сhangeBasketCount = new core_1.EventEmitter();
        this.getBasketSession();
    }
    BasketService.prototype.add = function (item) {
        this.basket.addItem(item);
        this.sessionService.set(session_name_1.SessionName.Basket, this.basket);
        this.changeBasket();
    };
    BasketService.prototype.remove = function (id) {
        this.basket.removeItem(id);
        this.sessionService.set(session_name_1.SessionName.Basket, this.basket);
        this.changeBasket();
    };
    BasketService.prototype.getBasket = function () {
        return this.basket;
    };
    BasketService.prototype.getItems = function () {
        return this.basket.getItems();
    };
    BasketService.prototype.getBasketCount = function () {
        return this.basket.getItemsCount();
    };
    BasketService.prototype.getTotalPrice = function () {
        return this.basket.getTotalPrice();
    };
    BasketService.prototype.changeBasket = function () {
        var chanchedBasket = {
            itemCount: this.basket.getItemsCount(),
            totalPrice: this.basket.getTotalPrice()
        };
        this.сhangeBasketCount.emit(chanchedBasket);
    };
    BasketService.prototype.getBasketSession = function () {
        var sessionBasket = this.sessionService.get(session_name_1.SessionName.Basket);
        if (sessionBasket != null || sessionBasket != undefined) {
            this.basket.items = sessionBasket.items;
            this.basket.totalPrice = sessionBasket.totalPrice;
        }
    };
    return BasketService;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], BasketService.prototype, "\u0441hangeBasketCount", void 0);
BasketService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [session_service_1.SessionService])
], BasketService);
exports.BasketService = BasketService;
//# sourceMappingURL=basket.service.js.map