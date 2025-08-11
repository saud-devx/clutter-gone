import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import Fuse from 'fuse.js';
import Papa from 'papaparse';
export interface QA {
  question: string;
  answer: string;
}

@Injectable({
  providedIn: 'root'
})
export class Chatbot {
  
   private data: QA[] = [];
  private fuse!: Fuse<QA>;

  constructor(private http: HttpClient) {}

  async loadCsv(path = 'assets/QA.csv') {
    const csvText = await firstValueFrom(this.http.get(path, { responseType: 'text' }));
    console.log(csvText,'How can I get a quote?')
    const parsed = Papa?.parse<QA>(csvText, { header: true, skipEmptyLines: true });
    console.log(parsed,'How can I get a parsed parsed?')

    this.data = parsed.data.filter((q:any) => q.question && q.answer);
    this.fuse = new Fuse(this.data, {
      keys: ['question'],
      threshold: 0.4 // lower = stricter matching
    });
  }

  getAnswer(query: string): string {
    if (!this.fuse) return 'Bot is not ready yet.';

    const results = this.fuse.search(query);
    if (results.length > 0) {
      return results[0].item.answer;
    } else {
      return "Sorry, I don't know the answer to that.";
    }
  }
}
