import { NgtUniversalModule } from '@ng-toolkit/universal';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FastComponent } from './fast/fast.component';
import { SlowComponent } from './slow/slow.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
declarations: [
  AppComponent,
  FastComponent,
  SlowComponent
],
imports: [
  CommonModule,
  NgtUniversalModule,
  AppRoutingModule,
  HttpClientModule
]
})
export class AppModule { }
