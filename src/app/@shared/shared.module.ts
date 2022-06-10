import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { LoaderComponent } from './loader/loader.component';
import { ProductItemComponent } from './product/product-item.component';

@NgModule({
  imports: [TranslateModule, CommonModule],
  declarations: [LoaderComponent, ProductItemComponent],
  exports: [LoaderComponent, ProductItemComponent],
})
export class SharedModule { }
