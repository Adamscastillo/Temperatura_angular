import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { weatherDatas } from 'src/app/models/interfaces/WeatherDatas';

@Component({
  selector: 'app-weather-home',
  templateUrl: './weather-home.component.html',
  styleUrls: []
})
export class WeatherHomeComponent implements OnInit {
  initialCityName = 'Amapá';

  weatherDatas!: weatherDatas;


  constructor(private weatherService: WeatherService){}

  ngOnInit(): void {
    this.getWheatherDatas(this.initialCityName);
  }
  getWheatherDatas(cityName: string): void {
    this.weatherService.getWeatherDatas(cityName).subscribe({
      next:(response) => {
        response && (this.weatherDatas = response)
      },
      error:(error)=> console.log(error),

    });
  }
}
