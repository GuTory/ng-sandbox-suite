import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ButtonDirective} from "../../utils/directives/button/button.directive";
import {MatSlideToggleModule} from '@angular/material/slide-toggle';


@Component({
  selector: 'app-images',
  standalone: true,
  imports: [CommonModule, ButtonDirective, MatSlideToggleModule],
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss']
})
export class ImagesComponent {

}
