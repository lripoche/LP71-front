import { Component, OnInit } from '@angular/core';
import { BurgersService } from '../api/api/burgers.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-burger-detail',
  templateUrl: './burger-detail.component.html',
  styleUrls: ['./burger-detail.component.css']
})
export class BurgerDetailComponent implements OnInit {

  burger;
  id : number;
  nutriments = [];

  constructor(private burgersService : BurgersService, private route : ActivatedRoute, private location : Location) {
    this.id = +this.route.snapshot.paramMap.get('id');
   }

  ngOnInit() {
    this.getBurger(this.id);
  }

  getBurger(id) : void {
    this.burgersService.burgerDetail(this.id)
        .subscribe(burger =>{ 
          this.burger = burger;
          for(let key in burger.nutriments) {
            this.nutriments.push({key: key, value: burger.nutriments[key] });
          }
        } );

  }

  goBack() {
    this.location.back();
  }

}
