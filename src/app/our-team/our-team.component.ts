import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-team',
  templateUrl: './our-team.component.html',
  styleUrls: ['./our-team.component.scss']
})
export class OurTeamComponent implements OnInit {
  @Input() teammember: number;
  image: string;
  quote: string;
  name: string;

  constructor() {
    this.initiateData();
  }

  ngOnInit(): void {
  }

  initiateData() {
    if (this.teammember === 1) {
      this.image = '';
      this.name = 'Jan van Overbeek';
      this.quote = 'Paarden kunnen niet vliegen, maar ganzen wel. Dus wees een gans'
    }else if(this.teammember === 2) {
      this.image = '';
      this.name = 'Koen van der Marel';
      this.quote = 'Koeien kunnen niet vliegen, maar ganzen wel. Dus wees een gans'
    }else {
      this.image = '';
      this.name = 'Jeroen Bol';
      this.quote = 'Eenden kunnen wel vliegen, maar paarden niet. Dus wees een eend'
    }
  }
}
