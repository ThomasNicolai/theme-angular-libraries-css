import { Injectable } from '@angular/core';
import { setSyntheticLeadingComments } from 'typescript';
import { CssComponentComponent } from './css-component.component';

export interface CssComponentTheme {
  backgroundColor: string;
  textColor: string;
}
@Injectable({
  providedIn: 'root',
})
export class CssComponentService {
  setTheme(
    themeConfig: CssComponentTheme = {
      backgroundColor: '',
      textColor: '',
    }
  ) {
    document.documentElement.style.setProperty(
      '--css-component-background-color',
      themeConfig.backgroundColor
    );
    document.documentElement.style.setProperty(
      '--css-component-text-color',
      themeConfig.textColor
    );
  }
  removeTheme() {
    document.documentElement.style.removeProperty(
      '--css-component-background-color'
    );
    document.documentElement.style.removeProperty('--css-component-text-color');
  }
}
