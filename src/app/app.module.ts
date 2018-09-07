import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { CreateAccountComponent } from './pages/create-account/create-account.component';
import { WallComponent } from './pages/wall/wall.component';
import { CreateProfileComponent } from './pages/create-profile/create-profile.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { HeaderComponent } from './graph/header/header.component';
import { ProfileInfoComponent } from './graph/profile-info/profile-info.component';
import { NavBarComponent } from './forms/nav-bar/nav-bar.component';
import { FacebookComponent } from './Buttons/facebook/facebook.component';
import { GoogleComponent } from './Buttons/google/google.component';
import { ReturnComponent } from './Buttons/return/return.component';
import { PublishComponent } from './Card/publish/publish.component';
import { PostComponent } from './Card/post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreateAccountComponent,
    WallComponent,
    CreateProfileComponent,
    ProfileComponent,
    HeaderComponent,
    ProfileInfoComponent,
    NavBarComponent,
    FacebookComponent,
    GoogleComponent,
    ReturnComponent,
    PublishComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
