import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('nl');
    this.translate.use('nl');
  }

  ngOnInit(): void {
  }

  getAbout() {
    let about = this.translate.instant("COMPANY.ABOUT");
    let output = '';
    for (let i=0; i < about.length; i++) {
      output += about[i];
    }
    return output;
  }

}
