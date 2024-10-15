import { Component } from '@angular/core';
import { ShoppingListService } from '../shopping-list.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-view-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './view-item.component.html',
  styleUrl: './view-item.component.scss'
})
export class ViewItemComponent {

  items :string[]=[];
 

  constructor(private shoppingListService:ShoppingListService) {}

  ngOnInit()
  {
    this.shoppingListService.items$.subscribe((items)=>{
      this.items=items;
    
    });

  }
  deleteItem(index:number)
  {
    this.shoppingListService.deleteItem(index);
  }

}
