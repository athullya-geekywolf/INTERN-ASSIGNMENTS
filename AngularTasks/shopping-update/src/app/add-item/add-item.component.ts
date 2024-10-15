import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from '../shopping-list.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-item',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-item.component.html',
  styleUrl: './add-item.component.scss'
})
export class AddItemComponent implements OnInit{
  item:string=' ';
  itemCount: number=0;

  constructor(private shoppingListService:ShoppingListService) {}

  ngOnInit()
  {
    this.itemCount=this.shoppingListService.getItemCount();

    this.shoppingListService.items$.subscribe(()=>{
      this.itemCount=this.shoppingListService.getItemCount();
    });

  }

  addItem()
  {
    if(this.item.trim())
    {
      this.shoppingListService.addItem(this.item);
      this.item='';
      
    }
  }

}
