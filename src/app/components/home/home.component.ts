import { Component, OnInit } from '@angular/core';
import { HomeserviceService } from '../../services/homeservice.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  responsiveOptions;
  products: any[];
  images: any[];
  responsiveOptions1:any[] = [
    {
        breakpoint: '1024px',
        numVisible: 5
    },
    {
        breakpoint: '768px',
        numVisible: 3
    },
    {
        breakpoint: '560px',
        numVisible: 1
    }
];
  constructor(private homeService: HomeserviceService) { 
    
  }

  ngOnInit(): void {
    this.getData();
    this.homeService.getImages().then(images => {this.images = images
    console.log(images)});
  }


  getData(){
    this.products = [
      {name: "kashi"},{name: "kashi"},{name: "kashi"}
    ]
  
  }
}
