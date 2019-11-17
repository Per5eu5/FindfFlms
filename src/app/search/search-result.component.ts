import {Component, OnInit, Input} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

import {SearchResult} from './search-result.model';
import { SearchService } from './search.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html'
})
export class SearchResultComponent implements OnInit {
  @Input() result: SearchResult;

  constructor(private service: SearchService,
              private  router: Router,
              private  route: ActivatedRoute) { }

  ngOnInit(): void { }
}
