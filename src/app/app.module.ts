import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// servicio firebase
import { ProfilesService } from './services/profiles.service';

// material.angular
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';

// Firebase
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AuthService } from './auth.service';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { CreateAccountComponent } from './pages/create-account/create-account.component';
import { WallComponent } from './pages/wall/wall.component';
import { CreateProfileComponent } from './pages/create-profile/create-profile.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { NavBarComponent } from './forms/nav-bar/nav-bar.component';
import { FormCreateAccountComponent } from './forms/form-create-account/form-create-account.component';
import { FormLoginComponent } from './forms/form-login/form-login.component';
import { BtnCreateAccountComponent } from './buttons/btn-create-account/btn-create-account.component';
import { BtnFacebookComponent } from './buttons/btn-facebook/btn-facebook.component';
import { BtnGoogleComponent } from './buttons/btn-google/btn-google.component';
import { BtnReturnComponent } from './buttons/btn-return/btn-return.component';
import { InfoProfileComponent } from './graf/info-profile/info-profile.component';
import { FormEditProfileComponent } from './forms/form-edit-profile/form-edit-profile.component';
import { PostComponent } from './card/post/post.component';
import { HeaderComponent } from './graf/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreateAccountComponent,
    WallComponent,
    CreateProfileComponent,
    ProfileComponent,
    NavBarComponent,
    FormCreateAccountComponent,
    FormLoginComponent,
    BtnCreateAccountComponent,
    BtnFacebookComponent,
    BtnGoogleComponent,
    BtnReturnComponent,
    InfoProfileComponent,
    FormEditProfileComponent,
    PostComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule
  ],
  providers: [AuthService, ProfilesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
