import { Component } from '@angular/core';

@Component({
  selector: 'app-stories',
  standalone: true,
  imports: [],
  templateUrl: './stories.html',
  styleUrl: './stories.css'
})
export class Stories {

  storyChiTiet:any = null;

  stories = [
  {
    title: 'Dragon Ball',
    author: 'Akira Toriyama',
    year: '1984',
    category: 'Shounen',
    views: 95000,
    image: 'https://upload.wikimedia.org/wikipedia/en/c/c9/DB_Tank%C5%8Dbon.png'
  },
  {
    title: 'Attack On Titan',
    author: 'Hajime Isayama',
    year: '2009',
    category: 'Action',
    views: 87000,
    image: 'https://upload.wikimedia.org/wikipedia/en/7/7a/Shingeki_no_Kyojin_manga_volume_1.jpg'
  },
  {
    title: 'Bleach',
    author: 'Tite Kubo',
    year: '2001',
    category: 'Shounen',
    views: 92000,
    image: 'https://upload.wikimedia.org/wikipedia/en/7/72/Bleach_Volume_1.png'
  },
  {
    title: 'One Piece',
    author: 'Eiichiro Oda',
    year: '1997',
    category: 'Adventure',
    views: 120000,
    image: 'https://upload.wikimedia.org/wikipedia/en/6/6f/One_Piece_Volume_1.jpg'
  },
  {
    title: 'Naruto',
    author: 'Masashi Kishimoto',
    year: '1999',
    category: 'Ninja',
    views: 90000,
    image: 'https://upload.wikimedia.org/wikipedia/en/9/94/NarutoCoverTankobon1.jpg'
  },
  {
    title: 'Demon Slayer',
    author: 'Koyoharu Gotouge',
    year: '2016',
    category: 'Action',
    views: 88000,
    image: 'https://upload.wikimedia.org/wikipedia/en/6/6e/Kimetsu_no_Yaiba_Volume_1.png'
  }
];

  xemChiTiet(story:any){
    this.storyChiTiet = story;
  }

  dongPopup(){
    this.storyChiTiet = null;
  }

}