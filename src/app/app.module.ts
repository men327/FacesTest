import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FaceService } from './face.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpModule,
    BrowserModule
  ],
  providers: [FaceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
