import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CssComponentComponent } from './css-component/css-component.component';

@NgModule({
  declarations: [CssComponentComponent],
  imports: [MatCardModule],
  exports: [CssComponentComponent],
})
export class YourLibraryModule {}
