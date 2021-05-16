import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ConverterComponent } from './converter/converter.component';
import { TemperatureConverterService } from 'src/services/temperature-converter.service';

@NgModule({
  declarations: [AppComponent, ConverterComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [TemperatureConverterService],
  bootstrap: [AppComponent],
})
export class AppModule {}
