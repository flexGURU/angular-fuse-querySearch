import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Fuse from 'fuse.js';
import items from './games.json'

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  searchQuery: string = ''; // Initialize searchQuery
  searchResults: any[] = [];
  items=items;
  
  fuseOptions = {
    keys: ['name', 'category', 'genre', 'developer', 'releaseYear'],
    threshold: 0.4, // Adjusted to a more typical threshold value
    includeScore: true
  };

  fuse = new Fuse(this.items, this.fuseOptions);

  search(query: string) {
    if (query) {
      this.searchResults = this.fuse.search(query).map(result => result.item);
    } else {
      this.searchResults = []; // Clear searchResults if query is empty
    }
  }
}
