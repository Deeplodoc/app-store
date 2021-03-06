"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var forms_2 = require("@angular/forms");
var router_1 = require("@angular/router");
var http_1 = require("@angular/http");
var ngx_bootstrap_1 = require("ngx-bootstrap");
var primeng_1 = require("primeng/primeng");
var animations_1 = require("@angular/platform-browser/animations");
var app_component_1 = require("./app.component");
var home_component_1 = require("./home/home.component");
var items_component_1 = require("./items/items.component");
var contacts_component_1 = require("./contacts/contacts.component");
var not_found_component_1 = require("./not-found/not-found.component");
var item_component_1 = require("./item/item.component");
var basket_component_1 = require("./basket/basket.component");
var login_component_1 = require("./login/login.component");
var register_component_1 = require("./register/register.component");
var user_profile_component_1 = require("./user.profile/user.profile.component");
var forgot_password_component_1 = require("./forgot.password/forgot.password.component");
var reset_password_component_1 = require("./reset.password/reset.password.component");
var basket_service_1 = require("./services/basket.service");
var session_service_1 = require("./services/session.service");
var user_service_1 = require("./services/user.service");
var appRoutes = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'items', component: items_component_1.ItemsComponent },
    { path: 'items/:id', component: item_component_1.ItemComponent },
    { path: 'contacts', component: contacts_component_1.ContactsComponent },
    { path: 'basket', component: basket_component_1.BasketComponent },
    { path: 'profile/:userId', component: user_profile_component_1.UserProfileComponent },
    { path: 'forgotPassword', component: forgot_password_component_1.ForgotPasswordComponent },
    { path: 'registration', component: register_component_1.RegisterComponent },
    { path: '**', component: not_found_component_1.NotFoundComponent }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, forms_2.ReactiveFormsModule, router_1.RouterModule.forRoot(appRoutes), http_1.HttpModule,
            http_1.HttpModule, ngx_bootstrap_1.ModalModule.forRoot(), primeng_1.CalendarModule, animations_1.BrowserAnimationsModule],
        declarations: [app_component_1.AppComponent, home_component_1.HomeComponent, items_component_1.ItemsComponent, contacts_component_1.ContactsComponent,
            not_found_component_1.NotFoundComponent, item_component_1.ItemComponent, basket_component_1.BasketComponent, login_component_1.LoginComponent, register_component_1.RegisterComponent, user_profile_component_1.UserProfileComponent,
            forgot_password_component_1.ForgotPasswordComponent, reset_password_component_1.ResetPassword
        ],
        providers: [basket_service_1.BasketService, session_service_1.SessionService, user_service_1.UserService],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map