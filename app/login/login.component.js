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
var session_name_1 = require("../enums/session.name");
var session_service_1 = require("../services/session.service");
var LoginComponent = (function () {
    function LoginComponent(userService, sessionService) {
        this.userService = userService;
        this.sessionService = sessionService;
        this.loginForm = new forms_1.FormGroup({
            "login": new forms_1.FormControl("", [
                forms_1.Validators.required,
                forms_1.Validators.minLength(3)
            ]),
            "password": new forms_1.FormControl("", forms_1.Validators.required)
        });
    }
    LoginComponent.prototype.submit = function () {
        var _this = this;
        this.userService.login(this.loginForm.value)
            .subscribe(function (data) {
            _this.loginResponse = data;
            _this.sessionService.set(session_name_1.SessionName.Authorize, _this.loginResponse);
        }, function (error) {
            _this.error = error;
            console.log(_this.error);
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        selector: 'login-app',
        templateUrl: 'app/login/login.component.html'
    }),
    __metadata("design:paramtypes", [user_service_1.UserService,
        session_service_1.SessionService])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map