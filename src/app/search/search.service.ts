import { Injectable, Inject } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Observable, Subscription} from 'rxjs';
import { map } from 'rxjs/operators';
import { SearchResult, DetailResult } from './search-result.model';

export const OMDB_API_KEY = `21f9105f`;
export const OMDB_API_URL = 'http://www.omdbapi.com';

@Injectable()
export class SearchService {
  constructor(
    private http: HttpClient,
    @Inject(OMDB_API_KEY) private apiKey: string,
    @Inject(OMDB_API_URL) private apiUrl: string) { }

  search(query: string): Observable<SearchResult[]> {
    const params: string = [
      `s=${query}`,
      `apikey=${this.apiKey}`,
    ].join('&');

    const queryUrl = `${this.apiUrl}?${params}`;

    console.log('query', queryUrl);

    return this.http.get(queryUrl).pipe(
      map(response => {
        if (response['Search']) {
          return response['Search'].map(item => {
            console.log('raw item', item);
            return new SearchResult({
              poster: item.Poster,
              title: item.Title,
              year: item.Year,
              released: item.Released,
              id: item.imdbID
            });
          }) as any;
        } else {
          map(item => {
            return new SearchResult({});
          });
        }
      })
    );
  }

  getDetail(id: string): Observable<DetailResult> {
    const detailUrl = 'http://www.omdbapi.com/?i=' + id + '&apikey=21f9105f';
    return this.http.get(detailUrl).pipe(
      map(response => {
        return new DetailResult({
          title: response['Title'],
          year: response['Year'],
          poster: response['Poster'],
          plot: response['Plot'],
          director: response['Director'],
          released: response['Released']
        });
      })
    );
      // .subscribe(data => console.log('33333', data));
  }
}
