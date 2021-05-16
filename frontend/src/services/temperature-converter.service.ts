import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

export type Unit = 'Celsius' | 'Fahrenheit';

export interface Request {
  unit: Unit;
  value: number;
}

export interface Response {
  celsius: number;
  fahrenheit: number;
}

@Injectable()
export class TemperatureConverterService {
  constructor(private httpClient: HttpClient) {}

  convert(req: Request): Observable<Response> {
    return this.httpClient.post<Response>(environment.apiUrl, req);
  }
}
