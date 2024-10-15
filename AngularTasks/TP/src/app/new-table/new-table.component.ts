import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-new-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './new-table.component.html',
  styleUrl: './new-table.component.scss'
})
export class NewTableComponent {
  states = [
    { state: 'Andhra', cm: 'Jagan', capital: 'Amaravati' },
    { state: 'Telengana', cm: 'KCR', capital: 'Hyderabad' },
    { state: 'Karanataka', cm: 'Bommai', capital: 'Bangalore' },
    { state: 'Maharashtra', cm: 'Udhav Thakery', capital: 'Mumbai' },
    { state: 'Kerala', cm: 'Pinarai', capital: 'Trivandrum' },
    
  ];

}
