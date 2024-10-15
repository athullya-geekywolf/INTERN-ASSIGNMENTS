import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewTableComponent } from './new-table/new-table.component';
import { LinksComponent } from "./links/links.component";
import { CreateListComponent } from "./create-list/create-list.component";
import { NestedListComponent } from "./nested-list/nested-list.component";
import { AlertMessageComponent } from "./alert-message/alert-message.component";
import { LeapYearCheckerComponent } from "./leap-year-checker/leap-year-checker.component";
import { ShoppingComponent } from "./shopping/shopping.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NewTableComponent, LinksComponent, CreateListComponent, NestedListComponent, AlertMessageComponent, LeapYearCheckerComponent, ShoppingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'table-project';
}
