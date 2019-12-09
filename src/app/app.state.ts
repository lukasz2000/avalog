import {Bookmarks} from './models/bookmarks.model';

export interface AppState {
    readonly bookmarks: Bookmarks[];
}
