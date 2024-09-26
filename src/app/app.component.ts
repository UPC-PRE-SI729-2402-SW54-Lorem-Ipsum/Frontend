import { Component } from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';
import {FooterComponent} from "./public/components/footer/footer.component";
import {ToolbarComponent} from "./public/components/toolbar/toolbar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, ToolbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'LawConnect';
  options = [
    { path: '/home', title: 'Home'},
  ]
  constructor(private router: Router)
  {
  }

}
