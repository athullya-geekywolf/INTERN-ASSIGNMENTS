import { Component, EventEmitter, Input, Output} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-item',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-item.component.html',
  styleUrl: './add-item.component.scss'
})

export class AddItemComponent {
  itemValue: string =' ';
  @Output() itemAdded=new EventEmitter<string>();
  @Input() itemCount:number=0;
  addItem()
  {
    if(this.itemValue.trim() != " ")
    {
      this.itemAdded.emit(this.itemValue);
      this.itemValue=" ";
    }


  }

}
