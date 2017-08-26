"use strict";
var Basket = (function () {
    function Basket() {
        this.items = [];
        this.totalPrice = 0;
    }
    Basket.prototype.getItems = function () {
        return this.items.sort(function (a, b) {
            if (a.item.id > b.item.id) {
                return 1;
            }
            if (a.item.id < b.item.id) {
                return -1;
            }
            return 0;
        });
    };
    Basket.prototype.addItem = function (item) {
        if (item != null && item != undefined) {
            if (this.exists(item.id)) {
                var itemViewModel = this.getItemViewModelById(item.id);
                itemViewModel.count = itemViewModel.count + 1;
            }
            else {
                this.items.push({
                    item: item,
                    count: 1
                });
            }
            this.totalPrice += item.price;
        }
    };
    Basket.prototype.getTotalPrice = function () {
        return this.totalPrice;
    };
    Basket.prototype.getItemsCount = function () {
        if (this.items.length != 0) {
            return this.items.map(function (item) {
                return item.count;
            })
                .reduce(function (sum, current) { return sum += current; });
        }
        else {
            return 0;
        }
    };
    Basket.prototype.removeItem = function (id) {
        var itemViewModel = this.getItemViewModelById(id);
        var index = this.items.indexOf(itemViewModel);
        if (index != -1) {
            if (itemViewModel.count == 1) {
                this.items.splice(index, 1);
            }
            else {
                itemViewModel.count = itemViewModel.count - 1;
            }
            this.totalPrice = this.totalPrice - itemViewModel.item.price;
        }
    };
    Basket.prototype.getItemViewModelById = function (id) {
        return this.items.find(function (item) { return item.item.id == id; });
    };
    Basket.prototype.exists = function (id) {
        return this.items.map(function (item) {
            return item.item.id;
        }).some(function (i) { return i == id; });
    };
    return Basket;
}());
exports.Basket = Basket;
//# sourceMappingURL=basket.js.map