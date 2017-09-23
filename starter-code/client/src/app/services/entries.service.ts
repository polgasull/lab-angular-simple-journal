import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class EntriesService {

  constructor(private http: Http) { }

  getAllEntries() {
    return this.http.get("http://localhost:3000/api/journal-entries")
    .map((res) => res.json());
  }

  getSingleEntry(id) {
    return this.http.get("http://localhost:3000/api/journal-entries/" + id)
    .map((res) => res.json());
  }

}
