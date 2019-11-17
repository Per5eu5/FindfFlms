import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter, ElementRef } from '@angular/core';
import { SearchResult } from './search-result.model';
import { SearchService } from './search.service';
import { fromEvent } from 'rxjs';
import { map, filter, debounceTime, tap, switchAll } from 'rxjs/operators';

@Component({
  selector: 'app-search-box',
  template: '<mat-form-field><input matInput type="search" placeholder="Enter title" autofocus></mat-form-field>' +
    '<button mat-stroked-button>Search</button>'
})

export class SearchBoxComponent implements OnInit {
  @Output() loading: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() results: EventEmitter<SearchResult[]> = new EventEmitter<SearchResult[]>();

  constructor(private searchservice: SearchService,
              private el: ElementRef) {}

  ngOnInit(): void {
    fromEvent(this.el.nativeElement, 'keyup').pipe(
      map((e: any) => e.target.value),
      filter((text: string) => text.length > 4),
      debounceTime(1000),
      tap(() => this.loading.emit(true)),
      map((query: string) => this.searchservice.search(query)),
      switchAll()
    ).subscribe(
      (results: SearchResult[]) => {
        this.loading.emit(false);
        this.results.emit(results);
      },
      (err: any) => {
        console.log(err);
        this.loading.emit(false);
      },
      () => {
        this.loading.emit(false);
      }
    );
  }
}
