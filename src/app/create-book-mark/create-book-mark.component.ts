import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../app.state';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import * as BookMarkActions from '../actions/bookmarks.actions';

@Component({
  selector: 'app-create-book-mark',
  templateUrl: './create-book-mark.component.html',
  styleUrls: ['./create-book-mark.component.css']
})
export class CreateBookMarkComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  addBookmarkForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),
    url: new FormControl('',[
      Validators.required,
      Validators.pattern('^(?:http(s)?:\\/\\/)?[\\w.-]+(?:\\.[\\w\\.-]+)+[\\w\\-\\._~:/?#[\\]@!\\$&\'\\(\\)\\*\\+,;=.]+$')]),
    group: new FormControl('', Validators.required)
  });

  onSubmit(): void {
    this.store.dispatch(new BookMarkActions.AddBookmark(this.addBookmarkForm.value));
  }

  ngOnInit() {}

}
