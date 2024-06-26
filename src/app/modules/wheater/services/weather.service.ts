import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apikey = "b3c24faa5372ae15a073fdadf1ed4590"
  constructor(private http: HttpClient) { }
  getWeatherDatas(cityName: string): Observable<any>{
    return this.http.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&mode=json&APPID=${this.apikey}`,
      {}
    );
  }
}
