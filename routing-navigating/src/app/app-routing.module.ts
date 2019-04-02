import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutProfileComponent } from './about-profile/about-profile.component';
import { AboutContactComponent } from './about-contact/about-contact.component';


const routes: Routes = [

  {path:'',redirectTo:'/home', pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {
    path:'about',
    component: AboutComponent,
    children:[
      
      // {path: '',redirectTo:'profile' , pathMatch:'full'},
      {path: 'profile',component:AboutProfileComponent},
      {path: 'contact', component:AboutContactComponent },
      {path: '**',redirectTo:'profile' , pathMatch:'full'}

    ]
  },


  {path:'**',component:PageNotFoundComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
