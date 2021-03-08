import { Component, OnInit, HostListener } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('nl');
    this.translate.use('nl');
  }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event'])

  onWindowScroll(e) {
    let element = document.querySelector('.navbar');
      if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90) {
      element.classList.add('scroll');
    } else {
      element.classList.remove('scroll');
    }
  }

  setDutch() {
    this.translate.use('nl');
  }

  setEnglish() {
    this.translate.use('en');
  }

}
