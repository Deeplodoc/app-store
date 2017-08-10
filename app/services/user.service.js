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
var session_name_1 = require("../enums/session.name");
var session_service_1 = require("../services/session.service");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
require("rxjs/add/observable/throw");
var UserService = (function () {
    function UserService(http, sessionService) {
        this.http = http;
        this.sessionService = sessionService;
        this.loginUser = new core_1.EventEmitter();
    }
    UserService.prototype.login = function (item) {
        var _this = this;
        var data = JSON.stringify(item);
        var options = this.getOptionsForPost();
        return this.http.post('http://localhost:53791/account/login', data, options)
            .map(function (response) {
            var loginResponse = response.json();
            _this.loginUser.emit(loginResponse);
            return loginResponse;
        })
            .catch(function (error) {
            return Observable_1.Observable.throw(error);
        });
    };
    UserService.prototype.register = function (item) {
        var data = JSON.stringify(item);
        var options = this.getOptionsForPost();
        this.http.post('http://localhost:53791/account/register', data, options)
            .map(function (response) {
            console.log(response);
        })
            .catch(function (error) {
            console.log(error);
            return Observable_1.Observable.throw(error);
        }).subscribe();
    };
    UserService.prototype.forgotPassword = function (email) {
        return this.http.get('http://localhost:53791/account/forgotPassword?email=' + email)
            .map(function (response) {
            return true;
        })
            .catch(function (error) {
            return Observable_1.Observable.throw(error);
        });
    };
    UserService.prototype.confirm = function (userId, code) {
        return this.http.get('http://localhost:53791/account/confirm?userId=' + userId + '&code=' + code)
            .map(function (response) {
            console.log(response);
            return response.json();
        })
            .catch(function (error) {
            return Observable_1.Observable.throw(error);
        });
    };
    UserService.prototype.sendMailConfirm = function (userId) {
        return this.http.get('http://localhost:53791/account/sendConfirm?userId=' + userId)
            .map(function (response) {
            return true;
        })
            .catch(function (error) {
            return Observable_1.Observable.throw(error);
        });
    };
    UserService.prototype.resetPassword = function (email, code, newPassword) {
        return this.http.get('http://localhost:53791/account/resetPassword?email=' + email + '&code=' + code + '&newPassword=' + newPassword)
            .map(function (response) {
            return true;
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
    UserService.prototype.getUserById = function (userId) {
        var loginModel = this.sessionService.get(session_name_1.SessionName.Authorize);
        if (loginModel != null && loginModel != undefined) {
            var headers = new http_3.Headers({ 'Authorization': 'Bearer ' + loginModel.access_token });
            var options = new http_2.RequestOptions({ headers: headers });
            return this.http.get('http://localhost:53791/account/getUserById?userId=' + userId, options)
                .map(function (response) {
                return response.json();
            })
                .catch(function (error) {
                return Observable_1.Observable.throw(error);
            });
        }
        return null;
    };
    UserService.prototype.getOptionsForPost = function () {
        var headers = new http_3.Headers({ 'Content-Type': 'application/json' });
        return new http_2.RequestOptions({ headers: headers });
    };
    return UserService;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], UserService.prototype, "loginUser", void 0);
UserService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http,
        session_service_1.SessionService])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map