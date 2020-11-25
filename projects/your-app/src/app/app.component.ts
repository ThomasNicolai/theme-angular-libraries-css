import {
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
  ElementRef,
  Renderer2,
  AfterViewInit,
} from '@angular/core';
import {
  CssComponentService,
  CssComponentTheme,
} from 'projects/your-library/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'your-app';

  cssThemeSelected: '1' | '2' = '1';

  myTheme: CssComponentTheme = {
    backgroundColor: '#29b6f6',
    textColor: '#eee',
  };
  anotherTheme: CssComponentTheme = {
    backgroundColor: '#900C3F',
    textColor: '#afafaf',
  };

  constructor(private cssService: CssComponentService) {}

  toggleCssTheme(theme: string) {
    if (theme === '1') {
      this.cssService.setTheme(this.myTheme);
      this.cssThemeSelected = theme;
    } else if (theme === '2') {
      this.cssService.setTheme(this.anotherTheme);
      this.cssThemeSelected = theme;
    }
  }
  ngOnInit() {
    this.toggleCssTheme(this.cssThemeSelected);
  }
  ngOnDestroy() {
    this.cssService.removeTheme();
  }
}
