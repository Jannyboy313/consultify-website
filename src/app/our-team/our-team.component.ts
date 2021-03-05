import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-team',
  templateUrl: './our-team.component.html',
  styleUrls: ['./our-team.component.scss']
})
export class OurTeamComponent implements OnInit {
  @Input() teammember: string;
  @Input() reverse: boolean = false;
  image: string;
  quote: string;
  name: string;
  specialty: string;
  linkedin: string;
  github: string;

  constructor() { }

  ngOnInit(): void {
    this.initiateData();
  }

  initiateData() {
    if (this.teammember === 'Jan') {
      this.image = '../../assets/Jan.jpg';
      this.name = 'Jan van Overbeek';
      this.quote = 'Paarden kunnen niet vliegen, maar ganzen wel. Dus wees een gans';
      this.specialty = 'Backend Developer';
      this.linkedin = 'https://www.linkedin.com/in/jan-van-overbeek-7a1483174/';
      this.github = 'https://github.com/Jannyboy313'
    }else if(this.teammember === 'Koen') {
      this.image = '../../assets/Koen.jpg';
      this.name = 'Koen van der Marel';
      this.quote = 'Koeien kunnen niet vliegen, maar ganzen wel. Dus wees een gans';
      this.specialty = 'Billen veger';
      this.linkedin = 'https://www.linkedin.com/in/koen-van-der-marel-39b5b6176/';
      this.github = 'https://github.com/jerohero';
    }else {
      this.image = '../../assets/Jeroen.jpg';
      this.name = 'Jeroen Bol';
      this.quote = 'Eenden kunnen wel vliegen, maar paarden niet. Dus wees een eend';
      this.specialty = 'Frontend Developer';
      this.linkedin = 'https://www.linkedin.com/in/jeroen-bol/';
      this.github = 'https://github.com/KeithMarex';
    }
  }
}
