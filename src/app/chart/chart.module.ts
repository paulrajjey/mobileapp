import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChartPageRoutingModule } from './chart-routing.module';
import { ChartsModule } from 'ng2-charts';

import { ChartPage } from './chart.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChartPageRoutingModule,
    ChartsModule
  ],
  declarations: [ChartPage]
})
export class ChartPageModule {}
