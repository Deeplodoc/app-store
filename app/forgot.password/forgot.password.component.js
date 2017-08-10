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
var forms_1 = require("@angular/forms");
var user_service_1 = require("../services/user.service");
var ForgotPasswordComponent = (function () {
    function ForgotPasswordComponent(userService, activatedRoute, router) {
        var _this = this;
        this.userService = userService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.paramsSubscription = activatedRoute.queryParams.subscribe(function (queryParams) {
            _this.email = queryParams['email'];
            _this.code = queryParams['code'];
            if (_this.email == null && _this.email == undefined &&
                _this.code == null && _this.code == undefined) {
                _this.router.navigate(['notFound']);
            }
        });
        this.forgotForm = new forms_1.FormGroup({
            password: new forms_1.FormControl("", forms_1.Validators.required),
            confirmPassword: new forms_1.FormControl("", forms_1.Validators.required)
        }, this.passwordMatchValidator);
    }
    ForgotPasswordComponent.prototype.submit = function () {
        var _this = this;
        this.userService.resetPassword(this.email, this.code, this.forgotForm.value.password)
            .subscribe(function (data) {
            _this.isReady = true;
        }, function (error) {
            _this.error = error;
            _this.isReady = false;
            console.log(_this.error);
        });
    };
    ForgotPasswordComponent.prototype.ngOnDestroy = function () {
        this.paramsSubscription.unsubscribe();
    };
    ForgotPasswordComponent.prototype.passwordMatchValidator = function (g) {
        return g.value.password == g.value.confirmPassword
            ? null : { 'mismatch': true };
    };
    return ForgotPasswordComponent;
}());
ForgotPasswordComponent = __decorate([
    core_1.Component({
        selector: 'forgot-password',
        templateUrl: 'app/forgot.password/forgot.password.component.html'
    }),
    __metadata("design:paramtypes", [user_service_1.UserService,
        router_1.ActivatedRoute,
        router_1.Router])
], ForgotPasswordComponent);
exports.ForgotPasswordComponent = ForgotPasswordComponent;
//# sourceMappingURL=forgot.password.component.js.map