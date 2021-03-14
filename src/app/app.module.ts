import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MarketComponent } from './market/market.component';
import { NewsComponent } from './news/news.component';


@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    MarketComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: "market", component: MarketComponent },
      { path: "news", component: NewsComponent },
      { path: " ", redirectTo:"market", pathMatch:"full" },
      { path: "**", redirectTo:"market", pathMatch:"full" }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
