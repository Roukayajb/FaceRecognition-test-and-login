import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FaceComponent } from './face/face.component';
import { DataService } from './data.service';
import { HttpModule } from '@angular/http';
import { Http,Headers, RequestOptions } from '@angular/http';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FaceRecognitionService } from './face-recognition.service';
import { CamComponent } from './cam/cam.component';
import { MheaderComponent } from './mheader/mheader.component';

@NgModule({
  declarations: [
    AppComponent,
    FaceComponent,
    CamComponent,
    MheaderComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpModule,
  ],
  providers: [
    DataService,
    FaceRecognitionService
  ],
  bootstrap: [AppComponent],

})
export class AppModule { }
