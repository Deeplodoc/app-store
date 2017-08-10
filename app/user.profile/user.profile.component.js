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
var user_service_1 = require("../services/user.service");
var ngx_bootstrap_1 = require("ngx-bootstrap");
var UserProfileComponent = (function () {
    function UserProfileComponent(userService, activateRoute, modalService) {
        var _this = this;
        this.userService = userService;
        this.activateRoute = activateRoute;
        this.modalService = modalService;
        this.paramsSubscription = activateRoute.params
            .subscribe(function (params) { return _this.userId = params['userId']; });
    }
    UserProfileComponent.prototype.confirmEmail = function () {
        var _this = this;
        this.userService.sendMailConfirm(String(this.user.id))
            .subscribe(function (data) {
            _this.isSuccessSendConfirm = true;
        }, function (error) {
            _this.errorSendConfirm = error;
            console.log(_this.error);
        });
    };
    UserProfileComponent.prototype.openModal = function (template) {
        this.modalRef = this.modalService.show(template);
    };
    UserProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.userId != null && this.userId != undefined) {
            this.userService.getUserById(this.userId)
                .subscribe(function (data) {
                _this.user = data;
                _this.isConfirm = _this.user.isConfirm;
            }, function (error) {
                _this.error = error;
            });
        }
    };
    UserProfileComponent.prototype.ngOnDestroy = function () {
        this.paramsSubscription.unsubscribe();
    };
    return UserProfileComponent;
}());
UserProfileComponent = __decorate([
    core_1.Component({
        selector: 'user-profile',
        templateUrl: 'app/user.profile/user.profile.component.html'
    }),
    __metadata("design:paramtypes", [user_service_1.UserService,
        router_1.ActivatedRoute,
        ngx_bootstrap_1.BsModalService])
], UserProfileComponent);
exports.UserProfileComponent = UserProfileComponent;
//# sourceMappingURL=user.profile.component.js.map