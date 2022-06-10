import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-section-product',
  templateUrl: './section-product.component.html',
  styleUrls: ['./section-product.component.scss'],
})
export class SectionProductComponent implements OnInit {
  public isLoading = false;

  constructor() { }

  ngOnInit() {
    this.isLoading = true;
  }
}
