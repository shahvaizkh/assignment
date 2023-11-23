import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import { ModeratorComponent } from './moderator/moderator.component';
import { UserComponent } from './user/user.component';
import { LogoutComponent } from './logout/logout.component';
import { HeaderComponent } from './header/header.component'; // Don't forget to import ReactiveFormsModule

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    ModeratorComponent,
    UserComponent,
    LogoutComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
