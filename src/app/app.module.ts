import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import {AppComponent} from './app.component';
import {MaterialModule} from "./material.module";

@NgModule({
    imports:      [
        BrowserModule,
        BrowserAnimationsModule,
        MaterialModule
    ],
    providers:    [],
    declarations: [
        AppComponent
    ],
    bootstrap:    [AppComponent]
})
export class AppModule {
}
