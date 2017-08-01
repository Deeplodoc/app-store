import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent }   from './app.component';
import { HomeComponent } from './home/home.component';
import { ItemsComponent } from './items/items.component';
import { ContactsComponent } from './contacts/contacts.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ItemComponent } from './item/item.component';
import { BasketComponent } from './basket/basket.component';

import { BasketService } from './services/basket.service';
import { SessionService } from './services/session.service';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'items', component: ItemsComponent },
    { path: 'items/:id', component: ItemComponent },
    { path: 'contacts', component: ContactsComponent },
    { path: 'basket', component: BasketComponent },
    { path: '**', component: NotFoundComponent }
];

@NgModule({
    imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(appRoutes), HttpModule ],
    declarations: [ AppComponent, HomeComponent, ItemsComponent, ContactsComponent, 
        NotFoundComponent, ItemComponent, BasketComponent 
    ],
    providers: [ BasketService, SessionService ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }