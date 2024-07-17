import { Routes } from '@angular/router';
import { OneComponent } from './components/one/one.component';
import { TwoComponent } from './components/two/two.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { StructuralDirectivesComponent } from './components/structural-directives/structural-directives.component';
import { AttributeDirectivesComponent } from './components/attribute-directives/attribute-directives.component';
import { ReactiveComponent } from './components/reactive/reactive.component';
import { TemplateComponent } from './components/template/template.component';
import { PipesComponent } from './components/pipes/pipes.component';

export const routes: Routes = [
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
   
    }
    
   
];
