import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-team',
  templateUrl: './our-team.component.html',
  styleUrls: ['./our-team.component.scss']
})
export class OurTeamComponent implements OnInit {
  @Input() teammember: string;
  image: string;
  quote: string;
  name: string;

  constructor() { }

  ngOnInit(): void {
    this.initiateData();
  }

  initiateData() {
    if (this.teammember === 'Jan') {
      this.image = '../../assets/Jan.jpg';
      this.name = 'Jan van Overbeek';
      this.quote = 'Paarden kunnen niet vliegen, maar ganzen wel. Dus wees een gans'
    }else if(this.teammember === 'Koen') {
      this.image = '../../assets/Koen.jpg';
      this.name = 'Koen van der Marel';
      this.quote = 'Koeien kunnen niet vliegen, maar ganzen wel. Dus wees een gans'
    }else {
      this.image = '../../assets/Jeroen.jpg';
      this.name = 'Jeroen Bol';
      this.quote = 'Eenden kunnen wel vliegen, maar paarden niet. Dus wees een eend'
    }
  }
}
