import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FilmeService {

  private readonly apiUrl = 'http://www.omdbapi.com/';
  private readonly apiKey = '930ff0ad'; 

  constructor(private http: HttpClient) {}

  getFilmes(titulo: string) {
    return this.http.get(`${this.apiUrl}?apikey=${this.apiKey}&s=${titulo}`);
  }

  getFilmeById(id: string) {
    return this.http.get(`${this.apiUrl}?apikey=${this.apiKey}&i=${id}`);
  }
}

