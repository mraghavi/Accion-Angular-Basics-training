import { Routes } from '@angular/router';
import { OneComponent } from './components/one/one.component';
import { TwoComponent } from './components/two/two.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { StructuralDirectivesComponent } from './components/structural-directives/structural-directives.component';
import { AttributeDirectivesComponent } from './components/attribute-directives/attribute-directives.component';
import { ReactiveComponent } from './components/reactive/reactive.component';
import { TemplateComponent } from './components/template/template.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { HomeComponent } from './components/home/home.component';
import { ApiGetComponent } from './components/api-get/api-get.component';

export const routes: Routes = [
    { 
        path: '',
         redirectTo: '/home',
          pathMatch: 'full' 
    },
   
    {
        path :'home',
        component: HomeComponent
    },
    
    {
        path :'one',
        component: OneComponent
    },
    {
        path :'two',
        component: TwoComponent
    },
    {
        path :'data-binding',
        component: DataBindingComponent
    },
    {
        path :'structural-directives',
        component: StructuralDirectivesComponent
    },
    {
        path :'attribute-directives',
        component: AttributeDirectivesComponent
    },
    {
        path :'reactive-form',
        component: ReactiveComponent
   
    },
    {
        path :'template-form',
        component: TemplateComponent
   
    },
    {
        path :'pipes',
        component: PipesComponent
   
    },
    {
        path :'api-get',
        component: ApiGetComponent
   
    },
    {
        path: '**',
       component: NotfoundComponent
   } 
   
];
