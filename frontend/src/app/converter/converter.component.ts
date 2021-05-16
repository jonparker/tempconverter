import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {
  BehaviorSubject,
  combineLatest,
  Observable,
  ReplaySubject,
  Subject,
  Subscription,
} from 'rxjs';
import { debounceTime, filter, map, switchMap, tap } from 'rxjs/operators';
import {
  TemperatureConverterService,
  Unit,
  Response,
} from 'src/services/temperature-converter.service';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss'],
})
export class ConverterComponent implements OnInit, OnDestroy {
  form!: FormGroup;
  sub: Subscription | undefined;
  convertedValue: Observable<string> | undefined;
  unitSubject: ReplaySubject<Unit> | undefined;
  unit: Observable<Unit>;

  constructor(
    private fb: FormBuilder,
    private tempConverterService: TemperatureConverterService
  ) {
    this.unitSubject = new ReplaySubject<Unit>();
    this.unitSubject.next('Celsius');
    this.unit = this.unitSubject;
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      value: [''],
    });

    this.convertedValue = combineLatest([
      this.form.valueChanges,
      this.unit,
    ]).pipe(
      debounceTime(300),
      filter(([val, _]) => !isNaN(parseFloat(val.value))),
      switchMap(([val, unit]) =>
        this.tempConverterService.convert({ value: val.value, unit }).pipe(
          map((res) => ({
            output: res,
            unit: unit,
          }))
        )
      ),
      map((result) => this.formatOutput(result.unit, result.output))
    );
  }

  formatOutput = (unit: Unit, result: Response) =>
    unit === 'Celsius'
      ? `${result.celsius} C is ${result.fahrenheit} F`
      : `${result.fahrenheit} F is ${result.celsius.toFixed(2)} C`;
}
