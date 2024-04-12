import { weatherDatas } from 'src/app/models/interfaces/WeatherDatas';
import { Component, Input } from '@angular/core';
import { faDroplet, faTemperatureHigh, faTemperatureLow, faWind } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html'
})
export class WeatherCardComponent {
  //dados da previsao do tempo recebido pelo pai
  @Input() weatherDatas!: weatherDatas;

  minTemperatureIcon = faTemperatureLow;
  maxTemperatureIcon = faTemperatureHigh;
  humidityIcon = faDroplet;
  windIcon = faWind;

}
