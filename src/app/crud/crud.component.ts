import { Component, OnInit } from '@angular/core';
import { ShoesService } from '../shoes.service';
import { empty } from 'rxjs';
@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
  shoesLs: any;
  selectedShoes: any;
  constructor(private shoesService: ShoesService) { }

  ngOnInit() {
    this.shoesService.getData().then((s) => {
      this.shoesLs = s;
    });
  }
  selected(item) {
    this.selectedShoes = item;
  }

  addShoes(shoes) {
    if (shoes.name !== '' && shoes.price !== '' && shoes.img !== '') {
      this.shoesService.getData().then((s) => {
        // console.log(s);
        const flag = false;
        for (let i = 0; i < s.length; i++) {
          if (s[i] === undefined) {
            this.shoesService.addShoes(shoes, i).then(() => {
              alert(`Added into index ${i}`);
            });
            break;
          }
          if (i === s.length - 1) {
            this.shoesService.addShoes(shoes, i + 1).then( () => {
              alert(`Added into index ${i + 1}`);
            });
          }
        }
      });
    } else {
      alert('Please fil in the form first');
    }
  }

  deleteShoes(id) {
    if (confirm('Are you sure to delelte this product')) {
      this.shoesService.deleteShoes(id).then((s) => {
        alert('Deleted');
      });
    }
  }

  updateShoes(shoes) {
    this.shoesService.updateShoes(shoes).then(s => {
      alert(`Updated index ${shoes.id}`);
    });
  }
}
