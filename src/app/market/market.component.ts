import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StockService } from '../stock.service';
import { StockInterface } from '../stock-interface';
import { Picture } from '../picture';

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.css']
})
export class MarketComponent implements OnInit {
    stocks:StockInterface[] = [];
    errorMessage = '';
    pictures: Picture[] = [];
  constructor(private router: Router,
     private route : ActivatedRoute,
     private stockService:StockService) { };
  ngOnInit(): void {
     this.stockService.getStocks().subscribe({
      next: stocks => {
        this.stocks = stocks;
      },
      error: err => this.errorMessage = err
    });
     this.stockService.getPictures().subscribe({
      next: pictures => {
        this.pictures = pictures;
      },
      error: err => this.errorMessage = err
    });
  }
  onClick():void {
    this.router.navigate(['/news']);
  }
}
