import { Component } from '@angular/core';
import { AssetsService } from '../../../shared/services/assets.service';

@Component({
  selector: 'app-home-banner',
  standalone: true,
  imports: [],
  providers: [],
  templateUrl: './home-banner.component.html',
  styleUrl: './home-banner.component.css'
})
export class HomeBannerComponent {

  constructor(private assetsService: AssetsService) { }

  getImage(name: string) {
    return this.assetsService.getImage(name);
  }

}
