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
var basket_service_1 = require("./services/basket.service");
var AppComponent = (function () {
    function AppComponent(basketService) {
        this.basketService = basketService;
        this.basketCount = 0;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.basketCount = this.basketService.getBasketCount();
        this.basketService.onAddedToBasket.subscribe(function (count) {
            _this.basketCount = count;
        });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'app-store',
        templateUrl: 'app/app.component.html',
        styleUrls: ['app/app.component.css'],
        providers: [basket_service_1.BasketService]
    }),
    __metadata("design:paramtypes", [basket_service_1.BasketService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map