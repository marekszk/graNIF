import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import 'hammerjs';

import { AppComponent } from './app.component';
import { MdButtonModule, MdDialogModule } from '@angular/material';
import { StartComponent } from './start/start.component';
import { AppService } from './app.service';
import { EndComponent } from './end/end.component';

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    EndComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdDialogModule
  ],
  providers: [
    AppService
  ],
  bootstrap: [AppComponent],
  exports: [
    MdButtonModule,
    MdDialogModule
  ],
  entryComponents: [
    StartComponent,
    EndComponent
  ]
})
export class AppModule { }
