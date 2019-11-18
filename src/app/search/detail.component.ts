import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

import {SearchService} from './search.service';
import {DetailResult} from './search-result.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
})

export class DetailComponent implements OnInit {
  id: string;
  detail: DetailResult;

  constructor(private service: SearchService,
              private route: ActivatedRoute,
              private location: Location) {
    route.params.subscribe(params => { this.id = params['id']; });
  }

  ngOnInit(): void {
    this.service.getDetail(this.id).subscribe(val => this.detail = val);
  }

  back(): void {
    this.location.back();
  }
}
