import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StockService } from '../stock.service';
import { StockInterface } from '../stock-interface';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
    stocks:StockInterface[] = [];
    errorMessage = '';
  constructor(private route: ActivatedRoute, 
    private router: Router,
    private stockService:StockService) { }

  ngOnInit(): void {
    this.stockService.getStocks().subscribe({
      next: stocks => {
        this.stocks = stocks;
      },
      error: err => this.errorMessage = err
    });
  }

  onBack(): void {
    this.router.navigate(['/market']);
  }
}
