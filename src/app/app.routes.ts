import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Hotel } from './hotel/hotel';
import { About } from './about/about';
import { Contact } from './contact/contact';

export const routes: Routes = [
    {path:'', component:Home},

    {path:'hotel',component:Hotel, 
           
        children:[
            {path:'about',component:About},
            {path:'contact',component:Contact}

        ]

    }
];
