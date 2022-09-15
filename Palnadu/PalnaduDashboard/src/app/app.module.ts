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

@NgModule({
  declarations: [
    AppComponent,
    DashboraddComponent,
    SidebarComponent,
    DashboardviewComponent,
    TablesComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [GetvaluesService,FormsModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
