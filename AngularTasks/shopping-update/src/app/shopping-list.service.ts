import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  private items:string[]=[];
  
  private itemsSubject=new BehaviorSubject<string[]>(this.items);

  items$=this.itemsSubject.asObservable();


  addItem(item:string)
  {
    this.items.push(item);
    this.itemsSubject.next(this.items);
  }

  getItemCount():number{
    return this.items.length;
  }

  deleteItem(index:number)
  {
    this.items.splice(index,1);
    this.itemsSubject.next(this.items);
   

  }

}
