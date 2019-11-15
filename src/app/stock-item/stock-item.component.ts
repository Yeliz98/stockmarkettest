import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SimpleChanges, OnChanges, OnDestroy, DoCheck, AfterViewChecked, AfterViewInit, AfterContentChecked, AfterContentInit, ChangeDetectionStrategy } from '@angular/core';
import {Stock} from './model/stock';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css'],
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class StockItemComponent implements OnInit, OnChanges, OnDestroy, DoCheck,AfterContentChecked,AfterContentInit, AfterViewChecked,AfterViewInit {

  @Input() public stock: Stock;
  @Output() private toggleFavorite: EventEmitter<Stock>;

  /* Chapter2
  public name:string;
  public code:string;
  public price: number;
  public previousprice:number;
  public positivechance: boolean;
  public favorite:boolean;
  */
  /* Chapter3
  //public stockClasses;

  //public stock:Stock;
  //public stockStyles;

  public stocks:Array<Stock>;
  */

  constructor() {
    this.toggleFavorite = new EventEmitter<Stock>();
   }

  onToggleFavorite(event) {
    this.toggleFavorite.emit(this.stock);
  }

  ngOnInit(): void {
    console.log('Stock Item Component - On Init');
  }
  ngAfterViewInit(): void {
    console.log('Stock Item Component - After View Init');
  }

  ngAfterViewChecked(): void {
    console.log('Stock Item Component - After View Checked');
  }

  ngAfterContentInit(): void {
    console.log('Stock Item Component - After Content Init');
  }
  ngAfterContentChecked(): void {
    console.log('Stock Item Component - After Content Checked');
  }

  ngDoCheck(): void {
    console.log('Stock Item Component - Do Check');
  }
  ngOnDestroy(): void {
    console.log('Stock Item Component - On Destroy');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Stock Item Component - On Changes - ', changes);
  }

//  changeStockPrice(){
  //  this.stock.price +=5;
  //}
  
  //ngOnInit() {
    /* Chapter2
    this.name='Test Stock Company';
    this.code='TSC';
    this.price=85;
    this.previousprice=80;
    this.positivechance=this.price >= this.previousprice;
    this.favorite=false;
    */
    
    
    /*Chapter3
    this.stock=new Stock('Test Stock Company', 'TSC', 85,80);
    let diff=(this.stock.price/this.stock.previousprice) -1;
    let largechange =Math.abs(diff) > 0.01;

    this.stockStyles = {"color":this.stock.ispositivechange() ? "green" : "red", "font-size":largechange ? "1.2em" : "0.8em"};
    */
    /* stockClasses

    this.stockClasses = {
      "positive": this.stock.ispositivechange(),
      "negative": this.stock.ispositivechange(),
      "large-change":largechange,
      "small-change":largechange
    };
     
    this.stocks=[
    new Stock ('Test Stock Company', 'TSC', 85,80),
    new Stock ('Second Stock Company', 'SSC', 10,20),
    new Stock ('Last Stock Company', 'LSC', 876,765)
    
  ];
  */

 // }
  /* Chapter3
  tooglefavorite(event, index){
    console.log('toggling the favorite state for this stock',index,event);
    this.stocks[index].favorite=!this.stocks[index].favorite;
  }

  trackStockByCode(index,stock){
    return stock.code;
  }
 
  
  tooglefavorite(event){
    console.log('toggling the favorite state for this stock',event);
    this.stock.favorite=!this.stock.favorite;
    
  }
*/
  /* Chapter2
   tooglefavorite(){
    console.log('toggling the favorite state for this stock');
    this.favorite=!this.favorite;
   }
   */

}