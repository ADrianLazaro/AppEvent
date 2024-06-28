import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { RouterLinkWithHref, RouterModule } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterLinkWithHref, HeaderComponent, RouterModule,],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

}
