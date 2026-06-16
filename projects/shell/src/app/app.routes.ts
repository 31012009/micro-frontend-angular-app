import { loadRemoteModule } from '@angular-architects/module-federation';
import { Routes } from '@angular/router';
import { HomeBannerComponent } from './pages/home-banner/home-banner.component';

export const routes: Routes = [
    {
        path: 'products',
        loadChildren: () =>
            loadRemoteModule({
                type: 'module',
                remoteEntry: 'https://products-mfe-app.netlify.app/remoteEntry.js',
                exposedModule: './Routes'
                // exposedModule: './Component'
            }).then(m => m.routes)
    },
    { // for component
        path: 'account',
        loadComponent: () =>
            loadRemoteModule({
                type: 'module',
                remoteEntry: 'https://account-mfe-app.netlify.app/remoteEntry.js',
                exposedModule: './Component'
            }).then(m => m.AppComponent)
    },
    // { //for module and routes
    //     path: 'account',
    //     loadChildren: () =>
    //         loadRemoteModule({
    //             type: 'module',
    //             remoteEntry: 'http://localhost:4202/remoteEntry.js',
    //             exposedModule: './Routes'
    //         }).then(m => m.routes)
    // },
    {
        path: '',
        component: HomeBannerComponent
    }
];
