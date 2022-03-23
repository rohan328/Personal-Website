import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'order-panel',
  templateUrl: './order-panel.component.html',
  styleUrls: ['./order-panel.component.scss']
})
export class OrderPanelComponent implements OnInit {

  val: number = 0;
  marginMode: string = 'cross';

  constructor() { }

  ngOnInit(): void {
    this.val = 0;
  }

}
