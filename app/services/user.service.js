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
var http_2 = require("@angular/http");
var http_3 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
require("rxjs/add/observable/throw");
var UserService = (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.login = function (login, password) {
        this.http.get('http://localhost:0000/account/login?login=' + login + '&password=' + password)
            .map(function (response) {
            console.log(response);
        })
            .catch(function (error) {
            return Observable_1.Observable.throw(error);
        });
    };
    UserService.prototype.register = function (item) {
        var data = JSON.stringify(item);
        var headers = new http_3.Headers({ 'Content-Type': 'application/json' });
        var options = new http_2.RequestOptions({ headers: headers });
        this.http.post('http://localhost:53791/account/register', data, options)
            .map(function (response) {
            console.log(response);
        })
            .catch(function (error) {
            console.log(error);
            return Observable_1.Observable.throw(error);
        }).subscribe();
    };
    UserService.prototype.forgotPassword = function (code) {
        return this.http.get('http://localhost:0000/account/getUserByForgotCode?code=' + code)
            .map(function (response) {
            return response.json();
        })
            .catch(function (error) {
            return Observable_1.Observable.throw(error);
        });
    };
    UserService.prototype.confirm = function (userId, code) {
        this.http.get('http://localhost:0000/account/confirm?userId=' + userId + '&code=' + code)
            .map(function (response) {
            console.log(response);
        })
            .catch(function (error) {
            return Observable_1.Observable.throw(error);
        });
    };
    UserService.prototype.resetPassword = function (email, newPassword) {
        this.http.get('http://localhost:0000/account/resetPassword?email=' + email + '&newPassword=' + newPassword)
            .map(function (response) {
            console.log(response);
        })
            .catch(function (error) {
            return Observable_1.Observable.throw(error);
        });
    };
    UserService.prototype.editUser = function (item) {
        var data = JSON.stringify(item);
        var headers = new http_3.Headers({ 'Content-Type': 'application/json;charset=utf-8' });
        this.http.post('http://localhost:0000/account/editUser', data, { headers: headers })
            .map(function (response) {
            console.log(response);
        })
            .catch(function (error) {
            return Observable_1.Observable.throw(error);
        });
    };
    return UserService;
}());
UserService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map