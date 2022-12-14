import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { HomeComponent } from './components/home/home.component';
import { ProgramsComponent } from './components/programs/programs.component';

const routes: Routes = [

  { path: 'home', component:HomeComponent},
  {path:'about',component:AboutComponent},
  { path: 'programs', component: ProgramsComponent },
  { path: 'blogs', component: BlogsComponent },
  {path:'**',component:ProgramsComponent},
  
  
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
