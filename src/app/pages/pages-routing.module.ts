import { WorksComponent } from './works/works.component';
import { PagesComponent } from './pages.component';
import { ContactComponent } from './contact/contact.component';
import { ExpositionsComponent } from './expositions/expositions.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "", component: PagesComponent,
    children: [
      { path: "", redirectTo: "home", pathMatch: "full" },
      { path: "home", component: HomeComponent },
      { path: "about", component: AboutComponent },
      { path: "works", component: WorksComponent },
      { path: "expositions", component: ExpositionsComponent },
      { path: "contact", component: ContactComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
