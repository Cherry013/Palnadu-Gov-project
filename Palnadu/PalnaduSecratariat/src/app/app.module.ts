import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FormComponent } from './form/form.component';
import { CastandReligionComponent } from './castand-religion/castand-religion.component';
import { HttpClientModule } from '@angular/common/http';
import { WorkComponent } from './work/work.component';
import { RequirementComponent } from './requirement/requirement.component';
import { DisabilityComponent } from './disability/disability.component';
import { FinalSubmitionComponent } from './final-submition/final-submition.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    WelcomeComponent,
    FormComponent,
    CastandReligionComponent,
    WorkComponent,
    RequirementComponent,
    DisabilityComponent,
    FinalSubmitionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [FormComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
