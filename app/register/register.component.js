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
var RegisterComponent = (function () {
    function RegisterComponent(userService) {
        this.userService = userService;
        this.registerForm = new forms_1.FormGroup({
            "login": new forms_1.FormControl("", [
                forms_1.Validators.required,
                forms_1.Validators.minLength(3)
            ]),
            "email": new forms_1.FormControl("", [
                forms_1.Validators.required,
                forms_1.Validators.pattern("^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$")
            ]),
            "password": new forms_1.FormControl("", forms_1.Validators.required),
            "firstName": new forms_1.FormControl(""),
            "lastName": new forms_1.FormControl(""),
            "address": new forms_1.FormControl(""),
            "bDay": new forms_1.FormControl(""),
            "phone": new forms_1.FormControl("")
        });
    }
    RegisterComponent.prototype.submit = function () {
        this.user = this.registerForm.value;
        this.user.id = null;
        this.user.isConfirm = false;
        this.user.confirmCode = null;
        this.user.resetPasswordCode = null;
        console.log(this.user);
        this.userService.register(this.registerForm.value);
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    core_1.Component({
        selector: 'register-app',
        templateUrl: 'app/register/register.component.html'
    }),
    __metadata("design:paramtypes", [user_service_1.UserService])
], RegisterComponent);
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=register.component.js.map