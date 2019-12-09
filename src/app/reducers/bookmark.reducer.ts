import * as BookMarkActions from './../actions/bookmarks.actions';
import {Bookmarks} from '../models/bookmarks.model';

const initialState: Bookmarks[] = [
  {
  name: 'Google',
  url: 'https://www.google.pl',
  group: 'personal'
  },
  {
  name: 'Onet',
  url: 'https://www.onet.pl',
  group: 'work'
  },
  {
  name: 'WP',
  url: 'https://www.wp.pl',
  group: 'personal'
  },
  {
  name: 'Interia',
  url: 'https://www.interia.pl',
  group: 'work'
  },
  {
  name: 'Onwelo',
  url: 'https://www.onwelo.com',
  group: 'personal'
  },
  {
  name: 'Avaloq',
  url: 'https://www.avaloq.com',
  group: 'work'
  },
];

export function BookmarkReducer(state: Bookmarks[] = initialState, action: BookMarkActions.Actions) {
  switch (action.type) {
    case BookMarkActions.ADD_BOOKMARK:
      return [...state, action.payload];
    case BookMarkActions.REMOVE_BOOKMARK:
       state.splice(action.payload, 1);
       return [...state];
    default:
      return state;
  }
}
