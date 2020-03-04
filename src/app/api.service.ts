import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
API_KEY = '9ee3977179ba489cb6604fa18190d39b';
  constructor(private httpClient: HttpClient) { }
public getNews(){
  return this.httpClient.get(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${this.API_KEY}`);
}

}
