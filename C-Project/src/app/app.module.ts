import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation-panel/navigation.component';
import { ContentAreaComponent } from './content-area/content-area.component';
import { ContentAreaHeaderComponent } from './content-area-header/content-area-header.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { BookCardsComponent } from './book-cards/book-cards.component';
import { BookCardFormComponent } from './book-card-form/book-card-form.component';
import { BookCardFormWizardComponent } from './book-card-form-wizard/book-card-form-wizard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { LoginFormComponent } from './login-form/login-form.component';
import { HttpClientModule } from '@angular/common/http';
import { LogoutComponent } from './logout/logout.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { BooksContentAreaComponent } from './books-content-area/books-content-area.component';
import { BookViewComponent } from './book-view/book-view.component';

const appRoutes: Routes = [
  {path: '', component: BooksContentAreaComponent },
  {path: 'login', component: LoginFormComponent},
  {path: 'create-book', component: BookCardFormWizardComponent},
  {path: 'edit-book/:id',component: BookCardFormComponent},
  {path: 'view-book/:id',component: BookViewComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    ContentAreaComponent,
    ContentAreaHeaderComponent,
    SearchBarComponent,
    BookCardsComponent,
    BookCardFormComponent,
    BookCardFormWizardComponent,
    LoginFormComponent,
    LogoutComponent,
    BooksContentAreaComponent,
    BookViewComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
