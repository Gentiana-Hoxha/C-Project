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
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';


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
    BookCardFormWizardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
