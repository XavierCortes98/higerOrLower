import { Injectable } from '@angular/core';
import { MovieInfo } from '../models/movieInfo.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  getRandomMovie(): Observable<MovieInfo> {
    // Lógica para obtener una película aleatoria
    return this.http.get<MovieInfo>(this.apiUrl + '/random-movie');
  }

  getMovieList(): Observable<MovieInfo[]> {
    return this.http.get<MovieInfo[]>(this.apiUrl + '/sort-movies');
  }
}
