import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-section-slide',
  templateUrl: './section-slide.component.html',
  styleUrls: ['./section-slide.component.scss'],
})
export class SectionSlideComponent implements OnInit {
  public isLoading = false;
  public images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

  constructor() { }

  ngOnInit() {
    this.isLoading = true;
  }
}
