import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-shopping',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './shopping.component.html',
  styleUrl: './shopping.component.scss'
})
export class ShoppingComponent {
  itemList: string[] = []; // Array to hold the shopping list items
  itemValue: string = ''; // Property to bind input value

  addItem() {
    if (this.itemValue.trim() !== '') {
      this.itemList.push(this.itemValue); // Add new item to the list
      this.itemValue = ''; // Clear the input field
    }
  }

  deleteItem(index: number) {
    this.itemList.splice(index, 1); // Remove item by index
  }

}
