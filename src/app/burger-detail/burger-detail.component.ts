import { Component, OnInit, Input } from '@angular/core';
import { BurgersService } from '../api/api/burgers.service';


@Component({
  selector: 'app-burger-detail',
  templateUrl: './burger-detail.component.html',
  styleUrls: ['./burger-detail.component.css']
})
export class BurgerDetailComponent implements OnInit {

  @Input() id;

  burger;

  constructor(private burgersService : BurgersService) { }

  ngOnInit() {
    this.getBurger(this.id);
  }

  getBurger(id) : void {
    this.burger = this.burgersService.burgerDetail(this.id)
        .subscribe(burger => this.burger = burger);
  }

}
