import { Component } from '@angular/core';
import { ProductAssetService } from '../core/assets.service';
// import { ApiService } from 'shared';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { ApiService, Post } from '../../../../shared/src/public-api';
import { Observable } from 'rxjs';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatChipsModule, MatProgressBarModule],
  providers: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
  public posts$!: Observable<Post[]>;
  constructor(private assetService: ProductAssetService,
    private api: ApiService) { }

  getImage(name: string) {
    return this.assetService.getImage(name);
  }
  ngOnInit(): void {
    this.posts$ = this.api.getPosts();
  }
}
