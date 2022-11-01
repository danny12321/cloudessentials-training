import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tapes',
  templateUrl: './tapes.component.html',
  styleUrls: ['./tapes.component.scss']
})
export class TapesComponent implements OnInit {

  constructor() { }
  Items;

  ngOnInit(): void {
    // Dit wil je waarschijnlijk vervangen door een API call of iets dergelijks!
    this.Items = [
      "assets/tapes/images/10cc-im_not_in_love_s.jpg",
      "assets/tapes/images/Brandy_-_Looking_Glass.jpg",
      "assets/tapes/images/Cherry_Bomb_(cover).jpg",
      "assets/tapes/images/Come_and_Get_Your_Love_-_Redbone.jpeg",
      "assets/tapes/images/fleetwoodmac-rumours.jpg",
      "assets/tapes/images/Fox_on_the_Run_single_cover.jpg",
      "assets/tapes/images/George-Harrison-My-Sweet-Lord-Single-Image.jpg",
      "assets/tapes/images/glencampbell-southernnights.jpg",
      "assets/tapes/images/Go_All_the_Way_-_Raspberries.jpg",
      "assets/tapes/images/Hooked_on_a_Feeling_-_Blue_Swede.jpg",
      "assets/tapes/images/Iwantyoubacksingle.jpg",
      "assets/tapes/images/Jay_and_the_Americans_Come_a_Little_Bit_Closer_Single.jpg",
      "assets/tapes/images/Lake_Shore_Drive_-_Aliotta_Haynes_Jeremiah.jpg",
      "assets/tapes/images/moonage1-680x680.jpg",
      "assets/tapes/images/mr-blue-sky.jpg",
      "assets/tapes/images/Norman_Greenbaum_-_Spirit_in_the_Sky.jpg",
      "assets/tapes/images/O-o-h_Child_-_Five_Stairsteps.jpg",
      "assets/tapes/images/Rupert_Holmes_Pina.jpg",
      "assets/tapes/images/samcooke-bringitonhome.jpg",
      "assets/tapes/images/TND3-Cover_1024x1024.jpg",
      "assets/tapes/images/Wham_Bam_-_Silver.jpg",
    ];
  }

}
