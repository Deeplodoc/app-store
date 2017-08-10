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
var forms_1 = require("@angular/forms");
var user_service_1 = require("../services/user.service");
var ResetPassword = (function () {
    function ResetPassword(userService) {
        this.userService = userService;
        this.isExists = true;
        this.isReady = false;
        this.resetPassword = new forms_1.FormGroup({
            email: new forms_1.FormControl("", [
                forms_1.Validators.required,
                forms_1.Validators.pattern("^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$")
            ])
        });
    }
    ResetPassword.prototype.submit = function () {
        var _this = this;
        this.isExists = true;
        this.userService.forgotPassword(this.resetPassword.value.email)
            .subscribe(function (data) {
            _this.isExists = data;
            _this.isReady = true;
        }, function (error) {
            _this.error = error;
            _this.isExists = false;
            console.log(_this.error);
        });
    };
    return ResetPassword;
}());
ResetPassword = __decorate([
    core_1.Component({
        selector: 'reset-password',
        templateUrl: 'app/reset.password/reset.password.component.html'
    }),
    __metadata("design:paramtypes", [user_service_1.UserService])
], ResetPassword);
exports.ResetPassword = ResetPassword;
//# sourceMappingURL=reset.password.component.js.map