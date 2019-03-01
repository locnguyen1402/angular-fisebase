import { Component, OnInit } from '@angular/core';
import { ShoesService } from '../shoes.service';
import { element } from '@angular/core/src/render3';
import { $ } from 'protractor';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  shoesLs: any;

  constructor(private shoesService: ShoesService) { }
  ngOnInit() {
    this.shoesService.getData().then((s) => {
      this.shoesLs = s;
    });
  }

  addToCart(item, index) {
    const temp = JSON.parse(localStorage.getItem('cart')) || [];
    const arr = temp.filter((el) => el.name === item.name);
    let count = 0;
    // console.log(arr);
    /* if (temp.indexOf(item) !== -1) {
      console.log('coroi');
      temp[temp.indexOf(item)].sl += 1;
    } else {
      console.log('chuaco');
      temp.push(item);
      item.sl = 1;
    } */
    if (arr.length === 0) {
      // chua co
      temp.push(item);
      item.sl = 1;
      count = item.sl;
    } else {
      // co roi
      temp[temp.indexOf(arr[0])].sl += 1;
      count = temp[temp.indexOf(arr[0])].sl;
    }

    localStorage.setItem('cart', JSON.stringify(temp));
    // console.log(JSON.parse(localStorage.getItem('cart')));
    alert(`Successfully, you have ${count} for this item`);
  }
}
