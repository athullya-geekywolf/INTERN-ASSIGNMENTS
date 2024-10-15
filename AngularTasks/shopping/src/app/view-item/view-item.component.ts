import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-view-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './view-item.component.html',
  styleUrl: './view-item.component.scss'
})
export class ViewItemComponent {
  @Input() itemList : string[]=[];
  @Output() itemDeleted=new EventEmitter<number>();
  deleteItem(index:number)
  {
    this.itemDeleted.emit(index);

  }

}
