import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ExampleComponentComponent } from 'projects/your-library/src/lib/example-component/example-component.component';

@NgModule({
  declarations: [AppComponent, ExampleComponentComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ExampleComponentComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
