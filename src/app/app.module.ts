import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-roting.module';
import { HeaderComponent } from './components/header/header.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ProfileService } from './services/profile.service';
import { ProfileDetailsComponent } from './components/profileDetail/profileDetails.component';
import { CommonModule } from '@angular/common';
import { FilterPipe } from './pipes/filterPipe';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProfileComponent,
    ProfileDetailsComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
