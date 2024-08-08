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
import { ParentComponent } from './components/parent/parent.component';
import { LoginComponent } from './components/login/login.component';
import { LayoutComponent } from './components/layout/layout.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { RoutesComponent } from './components/routes/routes.component';
import { ServiceComponent } from './components/service/service.component';

export const routes: Routes = [
    { 
        path: '',
         redirectTo: 'login',
          pathMatch: 'full' 
    },
    
    {
        path :'login',
        component: LoginComponent
    },
    {
        path :'',
        component: LayoutComponent,
        children:[

            
    {
        path :'home',
        component: HomeComponent
    },
    { 
        path: 'about-me', 
        component: AboutMeComponent
     },
    { 
        path: 'contact', 
        component: ContactComponent 
    },
    {
         path: 'projects', 
         component: ProjectsComponent 
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
        path :'parent',
        component: ParentComponent
   
    },
    {
        path :'routes',
        component: RoutesComponent
   
    },
    {
        path :'services',
        component: ServiceComponent
   
    }
   
]
    },
    {
        path: '**',
       component: NotfoundComponent
   } 
    
   
];
