import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  selector: 'product-item',
  templateUrl: './product-item.component.html',
})
export class ProductItemComponent implements OnInit, OnChanges {

  @Input() public item!: string;
  @Input() public isLoading!: boolean;

  @Output() public passEntry: EventEmitter<any> = new EventEmitter();

  public destroy$ = new Subject();

  constructor(protected router: Router, protected route: ActivatedRoute) { }

  ngOnChanges(changes: SimpleChanges) {
    for (const propName in changes) {
      if (changes.hasOwnProperty(propName)) {
        let change = changes[propName];
        switch (propName) {
          case 'item':
            this.item = change.currentValue;
            break;
          case 'isLoading':
            this.isLoading = change.currentValue;
            break;
        }
      }
    }
  }

  ngOnInit() { }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

}
