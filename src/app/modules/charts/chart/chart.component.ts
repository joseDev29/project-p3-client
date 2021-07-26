import { Component, Input, OnInit } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { SingleDataSet, Label } from 'ng2-charts';
import { Color } from 'ng2-charts/lib/color';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
})
export class ChartComponent implements OnInit {
  @Input('labels') public pieChartLabels: Label[] = [];
  @Input('data') public pieChartData: SingleDataSet = [];
  @Input('setColors') public setColors: string[];

  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];
  public colors: Color[] = [
    {
      backgroundColor: [],
    },
  ];

  constructor() {}

  ngOnInit() {
    this.colors[0].backgroundColor = this.setColors;
  }
}
