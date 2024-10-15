import { Routes } from '@angular/router';
import { NewTableComponent } from './new-table/new-table.component';
import { LinksComponent } from './links/links.component';
import { NestedListComponent } from './nested-list/nested-list.component';
import { AlertMessageComponent } from './alert-message/alert-message.component';
import { CreateListComponent } from './create-list/create-list.component';
import { LeapYearCheckerComponent } from './leap-year-checker/leap-year-checker.component';
import { ShoppingComponent } from './shopping/shopping.component';

export const routes: Routes = [
    {
        path:'new-table',
        component:NewTableComponent
    },
    {
        path:'links',
        component:LinksComponent
    },
    {
        path:'nestedlist',
        component:NestedListComponent
    },
    {
        path:'alert',
        component:AlertMessageComponent
    },
    {
        path:'createlist',
        component:CreateListComponent
    },
    {
        path:'leapyear',
        component:LeapYearCheckerComponent
    },
    {
        path:'shopping',
        component:ShoppingComponent
    }

];
