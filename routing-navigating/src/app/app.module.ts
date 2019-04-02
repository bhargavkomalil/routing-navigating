import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ViewModule } from './view/view.module';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutProfileComponent } from './about-profile/about-profile.component';
import { AboutContactComponent } from './about-contact/about-contact.component';
import { TestService } from './test.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    PageNotFoundComponent,
    AboutProfileComponent,
    AboutContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ViewModule,
    HttpClientModule,
    FormsModule
    ],
  providers: [TestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
