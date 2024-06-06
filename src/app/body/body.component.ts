import { Component,AfterViewInit  } from '@angular/core';

import 'slick-carousel';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrl: './body.component.scss'
})
export class bodyComonent implements AfterViewInit {

  ngAfterViewInit(): void {
    ($('.slider') as any).slick({
      dots: true,
      infinite: true,
      speed: 200,
      slidesToShow: 1,
      adaptiveHeight: true
    });
  }
}



