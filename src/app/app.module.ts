import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader} from '@ngx-translate/http-loader';

import { AppComponent } from './app.component';
import { NavbarComponent } from './global/navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { OurTeamComponent } from './our-team/our-team.component';
import { HeadingComponent } from './global/heading/heading.component';
import { FooterComponent } from './global/footer/footer.component';
import { CompanyComponent } from './company/company.component';
import { PartnersComponent } from './partners/partners.component';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, '../assets/lang/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    OurTeamComponent,
    HeadingComponent,
    FooterComponent,
    CompanyComponent,
    PartnersComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxPageScrollCoreModule.forRoot({duration: 500, scrollOffset: 76, interruptible: true}),
    NgxPageScrollModule,
    TranslateHttpLoader,
    TranslateModule.forRoot({
      defaultLanguage: 'nl',
      loader: {
          provide: TranslateLoader,
          useFactory: createTranslateLoader,
          deps: [HttpClient]
      }
  })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
