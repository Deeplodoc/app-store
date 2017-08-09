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
var router_2 = require("@angular/router");
var user_service_1 = require("../services/user.service");
var session_name_1 = require("../enums/session.name");
var session_service_1 = require("../services/session.service");
var ngx_bootstrap_1 = require("ngx-bootstrap");
var ngx_bootstrap_2 = require("ngx-bootstrap");
var HomeComponent = (function () {
    function HomeComponent(route, router, userService, sessionService, modalService) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.userService = userService;
        this.sessionService = sessionService;
        this.modalService = modalService;
        this.querySubscription = route.queryParams.subscribe(function (queryParams) {
            _this.userId = queryParams['userId'];
            _this.code = queryParams['code'];
        });
    }
    HomeComponent.prototype.openModal = function () {
        this.modalRef = this.modalService.show(this.confirmTemplate);
    };
    HomeComponent.prototype.closeModal = function () {
        this.modalService.hide(this.modalService.getModalsCount());
    };
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.userId != null && this.userId != undefined &&
            this.code != null && this.code != undefined) {
            this.userService.confirm(this.userId, this.code)
                .subscribe(function (data) {
                console.log(data);
                _this.sessionService.set(session_name_1.SessionName.Authorize, data);
                _this.router.navigate(['/profile', _this.userId]);
            }, function (error) {
                _this.error = error;
                console.log(_this.error);
                _this.openModal();
            });
        }
    };
    HomeComponent.prototype.ngOnDestroy = function () {
        this.querySubscription.unsubscribe();
    };
    return HomeComponent;
}());
__decorate([
    core_1.ViewChild('confirmTemplate'),
    __metadata("design:type", ngx_bootstrap_1.BsModalRef)
], HomeComponent.prototype, "confirmTemplate", void 0);
HomeComponent = __decorate([
    core_1.Component({
        selector: 'home-app',
        templateUrl: 'app/home/home.component.html'
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_2.Router,
        user_service_1.UserService,
        session_service_1.SessionService,
        ngx_bootstrap_2.BsModalService])
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map