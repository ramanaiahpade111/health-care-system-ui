import { Routes } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { AppComponent } from './app.component';
import { AboutComponent } from './shared/components/about/about.component';
import { ContactComponent } from './shared/components/contact/contact.component';
import { HomeComponent } from './shared/components/home/home.component';
import { TestComponent } from './admin/components/test/test.component';
import { LabsComponent } from './admin/components/labs/labs.component';
import { LoginComponent } from './shared/components/login/login.component';
import { SignUpComponent } from './shared/components/sign-up/sign-up.component';

export const routes: Routes = [
    {path: "",component:HomeComponent},
    {path: "about", component: AboutComponent},
    {path: "contact", component: ContactComponent},
    {path: "tests", component: TestComponent},
    {path: "labs", component: LabsComponent},
    {path: "login", component: LoginComponent},
    {path: "signup", component: SignUpComponent}
];
