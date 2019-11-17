export class SearchResult {
  title: string;
  year: string;
  poster: string;
  id: string;

  constructor(obj?: any) {
    this.title = obj && obj.title || null;
    this.year = obj && obj.year || null;
    this.poster = obj && obj.poster || null;
    this.id = obj && obj.id || null;
  }
}

export class DetailResult {
  title: string;
  year: string;
  poster: string;
  plot: string;
  director: string;
  released: string;

  constructor(obj?: any) {
    this.plot = obj && obj.plot || null;
    this.title = obj && obj.title || null;
    this.year = obj && obj.year || null;
    this.poster = obj && obj.poster || null;
    this.director = obj && obj.director || null;
    this.released = obj && obj.released || null;
  }
}
