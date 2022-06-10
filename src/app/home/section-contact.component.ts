import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import {
  takeUntil,
} from 'rxjs/operators';
import { Logger, UntilDestroy } from '@app/@shared';
import { Subject, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

const log = new Logger('Register');

@UntilDestroy()
@Component({
  selector: 'app-section-contact',
  templateUrl: './section-contact.component.html',
  styleUrls: ['./section-contact.component.scss'],
})
export class SectionContactComponent implements OnInit {

  public isLoading: boolean;
  public form!: FormGroup;
  public destroy$ = new Subject();

  constructor(private router: Router) {
    this.isLoading = false;
  }

  ngOnInit() {
    this.createForm();
    this.initSubscribe();
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  private initSubscribe() {
    this.form.controls['fullname'].valueChanges.pipe(takeUntil(this.destroy$)).subscribe((val) => { this.changeFullName(val); });
    this.form.controls['phone'].valueChanges.pipe(takeUntil(this.destroy$)).subscribe((val) => { this.changePhone(val); });
    this.form.controls['email'].valueChanges.pipe(takeUntil(this.destroy$)).subscribe((val) => { this.changeEmail(val); });
    this.form.controls['message'].valueChanges.pipe(takeUntil(this.destroy$)).subscribe((val) => { this.changeMessage(val); });
  }

  private changeFullName(value: any) {
    return value;
  }

  private changePhone(value: any) { return value; }
  private changeEmail(value: any) { return value; }
  private changeMessage(value: any) { return value; }

  onSubmit() {
    if (this.form.valid) {
      let phone = this.form.controls['phone'].value;
      phone = phone.replace(/\D/g, '');
      this.form.controls['phone'].setErrors(null);
      this.isLoading = true;
    }
  }

  protected handleError(res: HttpErrorResponse) {
    return throwError(() => {
      let errors = res?.error?.errors;
      Object.keys(errors).forEach((key) => {
        if (key === 'email') {
          return;
        } else {
          this.form.controls[key].setErrors({ incorrect: true });
        }
      });
      return res;
    });
  }

  get f() {
    return this.form.controls;
  }

  private createForm() {
    this.form = new FormGroup(
      {
        fullname: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(128), this.noWhitespaceValidator]),
        phone: new FormControl(null, [Validators.required, Validators.maxLength(16), this.noWhitespaceValidator]),
        email: new FormControl(null, [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'), this.noWhitespaceValidator]),
        message: new FormControl(null, [Validators.nullValidator, Validators.maxLength(500)]),
      },
    );
  }

  private noWhitespaceValidator(control: FormControl) {
    const isWhitespace = (control.value || '').trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : { whitespace: true };
  }
}
