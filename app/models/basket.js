"use strict";
var Basket = (function () {
    function Basket() {
        this.items = [];
        this.totalPrice = 0;
    }
    Basket.prototype.getItems = function () {
        return this.items.sort(function (a, b) {
            if (a.id > b.id) {
                return 1;
            }
            if (a.id < b.id) {
                return -1;
            }
            return 0;
        });
    };
    Basket.prototype.addItem = function (item) {
        if (item != null && item != undefined) {
            this.items.push(item);
            this.totalPrice += item.price;
        }
    };
    Basket.prototype.getTotalPrice = function () {
        return this.totalPrice;
    };
    Basket.prototype.getItemsCount = function () {
        return this.items.length;
    };
    Basket.prototype.removeItem = function (id) {
        var item = this.items.find(function (item) { return item.id == id; });
        var index = this.items.indexOf(item);
        if (index != -1) {
            this.items.splice(index, 1);
            this.totalPrice = this.totalPrice - item.price;
        }
    };
    return Basket;
}());
exports.Basket = Basket;
//# sourceMappingURL=basket.js.map