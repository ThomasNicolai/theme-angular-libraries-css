import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'your-app';

  cssComponentColor = '#900C3F';

  toggleTheme() {
    if (document.body.classList.contains('dark-theme')) {
      document.body.classList.remove('dark-theme');
    } else {
      document.body.classList.add('dark-theme');
    }
  }

  ngOnInit() {
    document.body.style.setProperty(
      '--css-component-background-color',
      this.cssComponentColor
    );
  }
  ngOnDestroy() {
    document.body.style.removeProperty('--css-component-background-color');
  }
}
