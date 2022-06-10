import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { I18nModule } from '@app/i18n';
import { SharedModule } from '@shared';
import { HomeComponent } from './home.component';
import { SectionSlideComponent } from './section-slide.component';
import { SectionProductComponent } from './section-product.component';
import { SectionFeatureComponent } from './section-feature.component';
import { SectionContactComponent } from './section-contact.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SectionWeComponent } from './section-we.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    NgbModule,
    I18nModule,
    ReactiveFormsModule,
    TranslateModule.forRoot(),
    NgbModule,
    SharedModule,
    HomeRoutingModule,
  ],
  declarations: [
    HomeComponent,
    SectionSlideComponent,
    SectionWeComponent,
    SectionProductComponent,
    SectionFeatureComponent,
    SectionContactComponent
  ],
})
export class HomeModule { }
