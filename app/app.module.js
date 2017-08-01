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
var router_1 = require("@angular/router");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var home_component_1 = require("./home/home.component");
var items_component_1 = require("./items/items.component");
var contacts_component_1 = require("./contacts/contacts.component");
var not_found_component_1 = require("./not-found/not-found.component");
var item_component_1 = require("./item/item.component");
var basket_component_1 = require("./basket/basket.component");
var basket_service_1 = require("./services/basket.service");
var session_service_1 = require("./services/session.service");
var appRoutes = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'items', component: items_component_1.ItemsComponent },
    { path: 'items/:id', component: item_component_1.ItemComponent },
    { path: 'contacts', component: contacts_component_1.ContactsComponent },
    { path: 'basket', component: basket_component_1.BasketComponent },
    { path: '**', component: not_found_component_1.NotFoundComponent }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, router_1.RouterModule.forRoot(appRoutes), http_1.HttpModule],
        declarations: [app_component_1.AppComponent, home_component_1.HomeComponent, items_component_1.ItemsComponent, contacts_component_1.ContactsComponent,
            not_found_component_1.NotFoundComponent, item_component_1.ItemComponent, basket_component_1.BasketComponent
        ],
        providers: [basket_service_1.BasketService, session_service_1.SessionService],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map