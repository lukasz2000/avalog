import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';

import { BookMarksComponent } from './book-marks/book-marks.component';
import { BookmarkReducer } from './reducers/bookmark.reducer';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatButtonModule,
  MatTableModule,
  MatCardModule,
  MatChipsModule
} from '@angular/material';
import { MatSortModule } from '@angular/material/sort';
import { CreateBookMarkComponent } from './create-book-mark/create-book-mark.component';

@NgModule({
  declarations: [
    AppComponent,
    BookMarksComponent,
    CreateBookMarkComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatTableModule,
    MatSortModule,
    MatCardModule,
    MatChipsModule,
    StoreModule.forRoot({
      bookmarks: BookmarkReducer
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
