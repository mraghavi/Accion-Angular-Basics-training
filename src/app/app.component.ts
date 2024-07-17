import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { PipesComponent } from './components/pipes/pipes.component';
import { TemplateComponent } from './components/template/template.component';
import { ReactiveComponent } from './components/reactive/reactive.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet , RouterLink,TemplateComponent,ReactiveComponent,PipesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Basics';
}
