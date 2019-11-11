import { Component, SimpleChanges,OnInit,OnChanges, OnDestroy, DoCheck, AfterViewChecked, AfterViewInit, AfterContentChecked, AfterContentInit , ViewEncapsulation} from '@angular/core';
import {Stock} from './stock-item/model/stock';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  //encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit, OnChanges, OnDestroy, DoCheck, AfterContentChecked, AfterContentInit, AfterContentChecked, AfterViewInit  {
  title = 'Stock Market App';

  public stock:Stock;
  //private counter:number=1;

  //public stockObj:Stock;
  testMethod(){
    console.log('Test method in AppComponent triggered');
  }
  ngOnInit():void {
    this.stock=new Stock ('Test Stock Company ', 'TSC', 85,80);
    console.log('App Component - On Init');
  }

  ngAfterViewInit():void {
    console.log('App Component - After View Init');
  }

  ngAfterViewChecked():void {
    console.log('App Component - After View Checked');
  }

  ngAfterContentInit():void {
    console.log('App Component - After Content Init');
  }

  ngAfterContentChecked():void {
    console.log('App Component - After Content Checked');
  }

  ngDoCheck():void {
    console.log('App Component - Do Check');
  }

  ngOnDestroy():void {
    console.log('App Component - on Destroy');
  }

  ngOnChanges(changes:SimpleChanges):void {
    console.log('App Component - on Changes - ', changes);
  }



  /*onToggleFavorite(stock:Stock) {
    //console.log('Favorite for stock ', stock, ' was triggered');
    this.stock.favorite=!this.stock.favorite;
  }

  changeStockObject(){
    this.stock= new Stock ('Test Stock Company - ', + this.counter++, 'TSC', 85,80);
  }

  changeStockPrice(){
    this.stock.price +=10;
  }
  */
}
