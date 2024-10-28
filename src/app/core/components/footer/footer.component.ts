import { Component } from '@angular/core';
import {NgForOf, NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  imports: [
    NgForOf,
    NgOptimizedImage
  ],
  standalone: true
})
export class FooterComponent {

  socialData = [
    {url: 'https://twitter.com/Brighter-sys', name: 'Twitter', img: './assets/svg/twitter.svg'},
    {url: 'https://github.com/Brighter-sys', name: 'Github', img: './assets/svg/github.svg'}
  ];

  constructor() { }
}