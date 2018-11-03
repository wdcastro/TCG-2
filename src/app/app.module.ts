import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameFieldComponent } from './game-field/game-field.component';
import { LobbyMenuComponent } from './lobbymenu/lobbymenu.component';

@NgModule({
  declarations: [
    AppComponent,
    GameFieldComponent,
    LobbyMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
