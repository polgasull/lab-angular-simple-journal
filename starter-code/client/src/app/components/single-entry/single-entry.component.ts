import { Component, OnInit } from '@angular/core';
import { EntriesService } from '../../services/entries.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-single-entry',
  templateUrl: './single-entry.component.html',
  styleUrls: ['./single-entry.component.css'],
  providers: [EntriesService]
  
})
export class SingleEntryComponent implements OnInit {
  entry: Object = {};

  constructor(private theEntries: EntriesService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
    .subscribe((params) => {
      let id = String(params['id']);
      this.getSingleEntry(id);
    });
    
  }

  getSingleEntry(id) {
    this.theEntries.getSingleEntry(id)
    .subscribe((entry) =>{ 
      console.log(entry);
      
      return this.entry = entry});
  }

}
