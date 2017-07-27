import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent }   from './app.component';
import { HomeComponent } from './home/home.component';
import { ItemsComponent } from './items/items.component';
import { ContactsComponent } from './contacts/contacts.component';
import { NotFoundComponent } from './not-found/not-found.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'items', component: ItemsComponent },
    { path: 'contacts', component: ContactsComponent }
    { path: '**', component: NotFoundComponent }
];

@NgModule({
    imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(appRoutes) ],
    declarations: [ AppComponent, HomeComponent, ItemsComponent, ContactsComponent, NotFoundComponent ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }