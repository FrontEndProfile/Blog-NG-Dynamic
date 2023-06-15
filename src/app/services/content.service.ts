import { Injectable } from '@angular/core';
import { createClient } from 'contentful';

import { from } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor() { }

  private client = createClient({
    space: environment.spaceId,
    accessToken: environment.accessToken
  });

  getAllEntries() {
    // log code 
    // this.client.getEntries()
    // .then(entries => console.log(entries));
    const promise = this.client.getEntries()
    return from(promise);
  }

  getEntryById(id: string) {
    const promise = this.client.getEntry(id);
    return from(promise);
  }
  
  
}
