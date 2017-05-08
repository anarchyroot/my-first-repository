import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { TemplateReferenceComponent } from './template-reference/template-reference.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { DirectivesNgForComponentComponent } from './directives-ng-for-component/directives-ng-for-component.component';
import { DirectivesNgForComponent } from './directives-ng-for/directives-ng-for.component';

@NgModule({
  declarations: [
    AppComponent,
    InterpolationComponent,
    TemplateReferenceComponent,
    PropertyBindingComponent,
    TwoWayBindingComponent,
    DirectivesNgForComponentComponent,
    DirectivesNgForComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent, InterpolationComponent, TemplateReferenceComponent, PropertyBindingComponent, TwoWayBindingComponent]
})
export class AppModule { }
