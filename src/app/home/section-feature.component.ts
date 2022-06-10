import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-section-feature',
  templateUrl: './section-feature.component.html',
  styleUrls: ['./section-feature.component.scss'],
})
export class SectionFeatureComponent implements OnInit {
  quote: string | undefined;
  isLoading = false;

  constructor() { }

  ngOnInit() {
    this.isLoading = true;
  }
}
