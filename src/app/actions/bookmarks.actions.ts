import { Action } from '@ngrx/store';
import {Bookmarks} from '../models/bookmarks.model';

export const ADD_BOOKMARK     = '[BOOKMARK] Add';
export const REMOVE_BOOKMARK  = '[BOOKMARK] Remove';

export class AddBookmark implements Action {
  readonly type = ADD_BOOKMARK;

  constructor(public payload: Bookmarks) {}

}

export class RemoveBookmark implements Action {
  readonly type = REMOVE_BOOKMARK;

  constructor(public payload: number) {}

}


export type Actions = AddBookmark | RemoveBookmark;

