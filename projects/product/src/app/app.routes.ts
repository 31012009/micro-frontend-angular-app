import { loadRemoteModule } from '@angular-architects/module-federation';
import { Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';

export const routes: Routes = [
    {
        // path: 'product-list',
        path: '',
        component: ProductListComponent
    },
    // {
    //     path: '',
    //     redirectTo: 'product-list',
    //     pathMatch: 'full'
    // }
];
