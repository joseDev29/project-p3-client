import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartComponent } from './chart/chart.component';
import { ChartsModule as NgChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [ChartComponent],
  imports: [CommonModule, NgChartsModule],
  exports: [ChartComponent],
})
export class ChartsModule {}
