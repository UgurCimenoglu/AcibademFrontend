import { AdminpageComponent } from './components/adminpage/adminpage.component';
import { LoginGuard } from './guards/login.guard';
import { LoginComponent } from './components/login/login.component';
import { PolicySaleComponent } from './components/policy-sale/policy-sale.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './guards/auth.guard';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
  { path: "", pathMatch: "full", component: HomeComponent },
  { path: "police-satin-al", component: PolicySaleComponent, canActivate: [LoginGuard] },
  { path: "login", component: LoginComponent, canActivate: [AuthGuard] },
  { path: "register", component: RegisterComponent, canActivate: [AuthGuard] },
  { path: "admin", component: AdminpageComponent, canActivate: [LoginGuard] },
  { path: "profil", component: ProfileComponent, canActivate: [LoginGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
