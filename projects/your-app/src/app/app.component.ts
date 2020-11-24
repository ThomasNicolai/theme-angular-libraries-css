import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'your-app';

  anotherComponentColor = '#900C3F';

  toggleTheme() {
    if (document.body.classList.contains('dark-theme')) {
      document.body.classList.remove('dark-theme');
    } else {
      document.body.classList.add('dark-theme');
    }
  }

  ngOnInit() {
    document.body.style.setProperty(
      '--another-component-background-color',
      this.anotherComponentColor
    );
  }
  ngOnDestroy() {
    document.body.style.removeProperty('--another-component-background-color');
  }
}
