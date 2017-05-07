import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { TemplateReferenceComponent } from './template-reference/template-reference.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    InterpolationComponent,
    TemplateReferenceComponent,
    PropertyBindingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [InterpolationComponent,TemplateReferenceComponent,PropertyBindingComponent,AppComponent]
})
export class AppModule { }
