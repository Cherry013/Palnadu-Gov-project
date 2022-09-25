import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DashboraddComponent } from './dashboradd/dashboradd.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardviewComponent } from './dashboardview/dashboardview.component';
import { TablesComponent } from './tables/tables.component';
import { GetvaluesService } from './getvalues.service';
import { HttpClientModule } from '@angular/common/http';
import { ChartModule, CategoryService, DateTimeService, ScrollBarService, ColumnSeriesService, LineSeriesService, 
  ChartAnnotationService, RangeColumnSeriesService, StackingColumnSeriesService,LegendService, TooltipService
} from '@syncfusion/ej2-angular-charts';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { DateFormatOptions } from '@syncfusion/ej2-base'



@NgModule({
  declarations: [
    AppComponent,
    DashboraddComponent,
    SidebarComponent,
    DashboardviewComponent,
    TablesComponent,
    BarChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ChartModule
  ],
  providers: [GetvaluesService,FormsModule, CategoryService, DateTimeService, ScrollBarService, LineSeriesService, ColumnSeriesService, 
    ChartAnnotationService, RangeColumnSeriesService, StackingColumnSeriesService, LegendService, TooltipService],
  bootstrap: [AppComponent]
})
export class AppModule { }
