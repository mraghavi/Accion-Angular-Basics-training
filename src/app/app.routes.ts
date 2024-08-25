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
import { authGuard } from './sevices/auth.guard';
import { ViewChildComponent } from './components/view-child/view-child.component';

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
        component: HomeComponent,
        canActivate: [authGuard]
    },
    { 
        path: 'about-me', 
        component: AboutMeComponent,
        canActivate: [authGuard]
     },
    { 
        path: 'contact', 
        component: ContactComponent ,
        canActivate: [authGuard]
    },
    {
         path: 'projects', 
         component: ProjectsComponent ,
         canActivate: [authGuard]
        },
    {
        path :'one',
        component: OneComponent, 
        canActivate: [authGuard]
    },
    {
        path :'two',
        component: TwoComponent,
        canActivate: [authGuard]
    },
    {
        path :'data-binding',
        component: DataBindingComponent,
        canActivate: [authGuard]
    },
    {
        path :'structural-directives',
        component: StructuralDirectivesComponent, 
        canActivate: [authGuard]
    },
    {
        path :'attribute-directives',
        component: AttributeDirectivesComponent,
        canActivate: [authGuard]
    },
    {
        path :'reactive-form',
        component: ReactiveComponent,
        canActivate: [authGuard]
   
    },
    {
        path :'template-form',
        component: TemplateComponent,
        canActivate: [authGuard]
   
    },
    {
        path :'pipes',
        component: PipesComponent,
        canActivate: [authGuard]
   
    },
    {
        path :'api-get',
        component: ApiGetComponent,
         canActivate: [authGuard]
   
    },
    {
        path :'parent',
        component: ParentComponent,
        canActivate: [authGuard]
   
    },
    {
        path :'routes',
        component: RoutesComponent,
        canActivate: [authGuard]
   
    },
    {
        path :'services',
        component: ServiceComponent,
        canActivate: [authGuard]
   
    }
    
   
]
    },
    {
        path :'view-child',
        component: ViewChildComponent
       
   
    },
    {
        path: 'test',
        loadChildren:() => import('./lazyLoading/test/test.module').then(m=> m.TestModule)

    },
    {
        path: 'new-version',
        loadComponent:() => import('./lazyLoading/test/new-version/new-version.component').then(c=> c.NewVersionComponent)

    },
    {
        path: '**',
       component: NotfoundComponent
   } 
    
   
];
