import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule }   from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { ModalModule } from 'ngx-bootstrap';

import { AppComponent }   from './app.component';
import { HomeComponent } from './home/home.component';
import { ItemsComponent } from './items/items.component';
import { ContactsComponent } from './contacts/contacts.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ItemComponent } from './item/item.component';
import { BasketComponent } from './basket/basket.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserProfileComponent } from './user.profile/user.profile.component';

import { BasketService } from './services/basket.service';
import { SessionService } from './services/session.service';
import { UserService } from './services/user.service';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'items', component: ItemsComponent },
    { path: 'items/:id', component: ItemComponent },
    { path: 'contacts', component: ContactsComponent },
    { path: 'basket', component: BasketComponent },
    { path: 'profile/:userId', component: UserProfileComponent },
    { path: '**', component: NotFoundComponent }
];

@NgModule({
    imports:      [ BrowserModule, FormsModule, ReactiveFormsModule, RouterModule.forRoot(appRoutes), HttpModule, HttpModule, ModalModule.forRoot() ],
    declarations: [ AppComponent, HomeComponent, ItemsComponent, ContactsComponent, 
        NotFoundComponent, ItemComponent, BasketComponent, LoginComponent, RegisterComponent, UserProfileComponent
    ],
    providers: [ BasketService, SessionService, UserService ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }