import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CalculadoraModule} from "./calculadora/calculadora.module";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CalculadoraModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app-calculadora';
}
