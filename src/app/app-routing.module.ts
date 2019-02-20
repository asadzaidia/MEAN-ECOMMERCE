import { SettingsComponent } from './settings/settings.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuardService } from './auth-guard.service';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';







const routes: Routes = [ 
  {
    path:'',  //when empty path go to Home
    component:HomeComponent
  },
  {
    path:'register',
    component:RegisterComponent,
    canActivate:[AuthGuardService]
  },
  {
    path:'profile',
    component:ProfileComponent,
    canActivate:[AuthGuardService]
  },
  {
    path:'login',
    component:LoginComponent,
    canActivate:[AuthGuardService]
  },
  {
    path:'profile/settings',
    component:SettingsComponent,
    canActivate:[AuthGuardService]
  },
  {
    path:'**', //when no path go to Home
              //this is  called wild card path means path not exist aur undefined path then redirect to the somewhere error page
    redirectTo:''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
