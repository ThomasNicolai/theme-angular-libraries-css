import { NgModule } from '@angular/core';
import { MaterialComponentComponent } from './material-component/material-component.component';
import { MatCardModule } from '@angular/material/card';
import { CssComponentComponent } from './css-component/css-component.component';

@NgModule({
  declarations: [MaterialComponentComponent, CssComponentComponent],
  imports: [MatCardModule],
  exports: [MaterialComponentComponent, CssComponentComponent],
})
export class YourLibraryModule {}
