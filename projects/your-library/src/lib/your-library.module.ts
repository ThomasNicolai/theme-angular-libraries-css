import { NgModule } from '@angular/core';
import { ExampleComponentComponent } from './example-component/example-component.component';
import { MatCardModule } from '@angular/material/card';
import { AnotherComponentComponent } from './another-component/another-component.component';

@NgModule({
  declarations: [ExampleComponentComponent, AnotherComponentComponent],
  imports: [MatCardModule],
  exports: [ExampleComponentComponent, AnotherComponentComponent],
})
export class YourLibraryModule {}
