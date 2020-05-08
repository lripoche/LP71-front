import { Component, OnInit } from '@angular/core';
import { BurgersService, Burger } from '../api';


@Component({
  selector: 'app-burger-list',
  templateUrl: './burger-list.component.html',
  styleUrls: ['./burger-list.component.css']
})
export class BurgerListComponent implements OnInit {

  burgers : Burger[];

  constructor(private burgersService : BurgersService) { }

  ngOnInit() {
    this.getBurgers();
  }

  getBurgers() : void {
    this.burgersService.listBurgers()
        .subscribe(burgers => this.burgers = burgers);
  }

}
