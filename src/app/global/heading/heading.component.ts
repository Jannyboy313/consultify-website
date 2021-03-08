import { Component, OnInit, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.scss']
})
export class HeadingComponent implements OnInit {
 @Input() title: string;
  displayTitle: string = '';

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('nl');
    this.translate.use('nl');
  }

  ngOnInit(): void {
    this.initiateTitle();
  }

  initiateTitle() {
    if (this.title === 'Ons Team') {
      this.translate.get('NAV.TEAM').subscribe((text:string) => {this.displayTitle = text});
    }else if(this.title === 'Bedrijf') {
      this.translate.get('NAV.COMPANY').subscribe((text:string) => {this.displayTitle = text});
    }else {
      this.translate.get('NAV.PARTNERS').subscribe((text:string) => {this.displayTitle = text});
    }
  }

}
