import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductAssetService {
  // private baseUrl = 'http://localhost:4201/assets/';

  // getImage(name: string) {
  //   return `${this.baseUrl}/${name}`;
  // }
  private readonly productRemoteUrl = (window as any).__PRODUCT_REMOTE_URL__;
  private readonly assetBaseUrl = new URL('./assets/', import.meta.url).href;
  private readonly assetUrl = environment.assetsUrl;

  getImage(path: string): string {
    return `${this.assetUrl}${path}`;
  }
}
