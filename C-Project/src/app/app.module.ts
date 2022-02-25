import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation-panel/navigation.component';
import { ContentAreaComponent } from './content-area/content-area.component';
import { ContentAreaHeaderComponent } from './content-area-header/content-area-header.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { BookCardComponent } from './book-card/book-card.component';
import { BookCardFormComponent } from './book-card-form/book-card-form.component';
import { BookCardFormWizardComponent } from './book-card-form-wizard/book-card-form-wizard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { LoginFormComponent } from './login-form/login-form.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    ContentAreaComponent,
    ContentAreaHeaderComponent,
    SearchBarComponent,
    BookCardComponent,
    BookCardFormComponent,
    BookCardFormWizardComponent,
    LoginFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
