import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { Observable } from 'rxjs';
import { Bookmarks } from '../models/bookmarks.model';
import * as BookMarkActions from './../actions/bookmarks.actions';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-book-marks',
  templateUrl: './book-marks.component.html',
  styleUrls: ['./book-marks.component.css']
})

export class BookMarksComponent implements OnInit {
  dataSource$: Observable<Bookmarks[]>;

  constructor(private store: Store<AppState>) {
    this.dataSource$ = store.select('bookmarks');
  }

  displayedColumns: string[] = ['name', 'url', 'group', 'action'];

  bookmarksFilter(filterValue: string) {
    this.dataSource$ = this.store.pipe(
      select('bookmarks'),
      map((bookmarks: Bookmarks[]) => bookmarks.filter((b: Bookmarks) =>
        b.name.toLowerCase().includes(filterValue)
        || b.group.toString().toLowerCase().includes(filterValue)
      ))
    );
  }

  deleteBookmark(index): void {
    this.store.dispatch(new BookMarkActions.RemoveBookmark(index));
  }

  ngOnInit() {}

}
