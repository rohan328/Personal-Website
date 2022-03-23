import { Component, OnInit, AfterViewInit } from '@angular/core';

declare const TradingView: any;

@Component({
  selector: 'tradingview-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})

export class ChartComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {}
  ngAfterViewInit(){

    setTimeout(function() {
      new TradingView.widget(
        {
        "autosize": "true",
        "symbol": "BINANCE:BTCUSDT",
        "interval": "D",
        "timezone": "Etc/UTC",
        "theme": "Dark",
        "style": "1",
        "locale": "en",
        "toolbar_bg": "#f1f3f6",
        "enable_publishing": false,
        "withdateranges": true,
        "range": "ytd",
        "hide_side_toolbar": false,
        "allow_symbol_change": true,
        "show_popup_button": true,
        "popup_width": "1000",
        "popup_height": "650",
        "no_referral_id": true,
        "container_id": "tradingview_bac65"
        });
   }, 1000)
    
  }
    

}
