import {
  SearchService,
  OMDB_API_KEY,
  OMDB_API_URL
} from './search.service';

export const searchInjectables: Array<any> = [
  {provide: SearchService, useClass: SearchService},
  {provide: OMDB_API_KEY, useValue: OMDB_API_KEY},
  {provide: OMDB_API_URL, useValue: OMDB_API_URL},
];
