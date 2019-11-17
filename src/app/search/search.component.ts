import { Component, OnInit } from '@angular/core';
import { SearchService } from './search.service';
import {FormControl, Validators} from '@angular/forms';
import { debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';
import {SearchResult} from './search-result.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  results: SearchResult[];
  loading: boolean;

  constructor(private searchService: SearchService) { }

  ngOnInit() {
  }

  updateResults(results: SearchResult[]): void {
    this.results = results;
    console.log('results: ', this.results);
  }
}
