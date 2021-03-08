import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(translate: TranslateService) {
    translate.setDefaultLang('nl');
    translate.use('nl');
  }


  ngOnInit(): void {
  }

}
