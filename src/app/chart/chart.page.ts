import { Component, OnInit } from '@angular/core';
import { ChartDataSets } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.page.html',
  styleUrls: ['./chart.page.scss'],
})
export class ChartPage implements OnInit {
  chartData: ChartDataSets[] = [{ data: [], label: 'Stock price' }];
  chartLabels: Label[];
// Options
chartOptions = {
  responsive: true,
  title: {
    display: true,
    text: 'Historic Stock price'
  },
  pan: {
    enabled: true,
    mode: 'xy'
  },
  zoom: {
    enabled: true,
    mode: 'xy'
  }
};
chartColors: Color[] = [
  {
    borderColor: '#000000',
    backgroundColor: '#ff00ff'
  }
];
chartType = 'line';
showLegend = false;

// For search
stock = 'AAPL';

constructor(public  http: HttpClient ) { }

  ngOnInit() {
  }

  getData() {
    //this.http.get('https://financialmodelingprep.com/api/v3/historical-price-full/${this.stock}?from=2019-03-12&to=2020-03-12&apikey=9883aa6a4e80c291cbbfb8130d10907c').subscribe(res => {

    this.http.get('https://financialmodelingprep.com/api/v3/historical-price-full/AAPL?from=2018-03-12&to=2019-03-12&apikey=9883aa6a4e80c291cbbfb8130d10907c').subscribe(res => {

    const history = res['historical'];
    console.log(history);
    this.chartLabels = [];
    this.chartData[0].data = [];

    for (let entry of history) {
      console.log(entry);

      this.chartLabels.push(entry.date);
      this.chartData[0].data.push(entry['close']);
    }
  });
}

typeChanged(e) {
  const on = e.detail.checked;
  this.chartType = on ? 'line' : 'bar';
}


}
