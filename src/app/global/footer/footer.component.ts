import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('nl');
    this.translate.use('nl');
  }


  ngOnInit(): void {
  }

  getDescription() {
    let description = this.translate.instant("FOOTER.DESCRIPTION");
    let output = '';
    for (let i=0; i < description.length; i++) {
      output += description[i];
    }
    return output;
  }
}
