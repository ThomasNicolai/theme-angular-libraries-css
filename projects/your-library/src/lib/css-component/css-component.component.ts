import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-css-component',
  templateUrl: './css-component.component.html',
  styleUrls: ['./css-component.component.scss', './css-component.theme.scss'],
})
export class CssComponentComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
