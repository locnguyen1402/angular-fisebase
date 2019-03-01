import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';
import { ShoesService } from '../shoes.service';
import {HomepageComponent} from '../homepage/homepage.component';

@Component({
  providers: [HomepageComponent],
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  detail: any;
  constructor(
    private shoesService: ShoesService, private route: ActivatedRoute, private location: Location, private Home: HomepageComponent
  ) { }

  ngOnInit() {
    const id =  this.route.snapshot.paramMap.get('id');
    this.shoesService.getDetail(id).then((s) => {
      this.detail = s;
    });
  }

  addToCart() {
    const id =  this.route.snapshot.paramMap.get('id');
    this.Home.addToCart(this.detail, id);
  }

}
