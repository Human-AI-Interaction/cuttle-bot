import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { HandComponent } from './hand/hand.component';
import { ScrapViewComponent } from './scrap-view/scrap-view.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    HandComponent,
    ScrapViewComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
