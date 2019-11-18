import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LayoutModule } from '@angular/cdk/layout';

import { MatSliderModule } from '@angular/material/slider';
import {MatCardModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

import {searchInjectables} from './search/search.injectable';
import { SearchComponent } from './search/search.component';
import { SearchBoxComponent } from './search/search-box.component';
import {SearchResultComponent} from './search/search-result.component';

import { RouterModule, Routes } from '@angular/router';
import {DetailComponent} from './search/detail.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: SearchComponent },
  { path: 'movie/:id', component: DetailComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    SearchBoxComponent,
    SearchResultComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    ReactiveFormsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    RouterModule.forRoot(routes)
  ],
  providers: [searchInjectables],
  bootstrap: [AppComponent]
})
export class AppModule { }
