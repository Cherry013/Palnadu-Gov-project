import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CastandReligionComponent } from './castand-religion/castand-religion.component';
import { DisabilityComponent } from './disability/disability.component';
import { FinalSubmitionComponent } from './final-submition/final-submition.component';
import { FormComponent } from './form/form.component';
import { LoginComponent } from './login/login.component';
import { RequirementComponent } from './requirement/requirement.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { WorkComponent } from './work/work.component';

const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'login'},
  {path:'login',component: LoginComponent},
  {path:'Welcome',component:WelcomeComponent},
  {path:'form',component: FormComponent},
  {path:'castand-religion',component:CastandReligionComponent},
  {path:'Work',component:WorkComponent},
  {path:'Requirement',component:RequirementComponent},
  {path:'Disability',component:DisabilityComponent},
  {path:'FinalSubmition',component:FinalSubmitionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
