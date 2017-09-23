import { Component, OnInit } from '@angular/core';
import { EntriesService } from '../../services/entries.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css'],
  providers: [EntriesService]
})
export class EntryListComponent implements OnInit {

  entries: Array<any>;

  constructor(private theEntries: EntriesService, private router: Router) { }

  ngOnInit() {
    this.getAllEntries()
  }

  getAllEntries() {
    this.theEntries.getAllEntries()
    .subscribe((entries) => this.entries = entries);
  }

  viewEntry(id) {
    this.router.navigate(['home', id]);
  }

}
