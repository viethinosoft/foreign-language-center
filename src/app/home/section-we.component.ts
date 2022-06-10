import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-section-we',
  templateUrl: './section-we.component.html',
  styleUrls: ['./section-we.component.scss'],
})
export class SectionWeComponent implements OnInit {
  public isLoading = false;

  constructor() { }

  ngOnInit() {
    this.isLoading = true;
  }
}
