import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import { NgxPageScrollModule } from 'ngx-page-scroll';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { OurTeamComponent } from './our-team/our-team.component';
import { HeadingComponent } from './heading/heading.component';
import { FooterComponent } from './footer/footer.component';
import { CompanyComponent } from './company/company.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    OurTeamComponent,
    HeadingComponent,
    FooterComponent,
    CompanyComponent
  ],
  imports: [
    BrowserModule,
    NgxPageScrollCoreModule.forRoot({duration: 500, scrollOffset: 76, interruptible: true}),
    NgxPageScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
