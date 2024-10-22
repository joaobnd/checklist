import { Routes } from '@angular/router';
import {MainLayoutComponent} from "./core/main-layout/main-layout.component";
import {LoginComponent} from "./pages/login/login.component";
import {RegisterComponent} from "./pages/register/register.component";
import {HeaderComponent} from "./core/header/header.component";
import {AddChecklistComponent} from "./pages/add-checklist/add-checklist.component";
import {ChecklistsComponent} from "./pages/checklists/checklists.component";

export const routes: Routes = [
  {path: '', component: MainLayoutComponent, children: [
      {path: 'login', component: LoginComponent},
      {path: 'register', component: RegisterComponent}
    ]},
  {path: 'dashboard', component: HeaderComponent, children: [
      {path: 'add', component: AddChecklistComponent},
      {path: 'checklists', component: ChecklistsComponent}
    ]}

];
