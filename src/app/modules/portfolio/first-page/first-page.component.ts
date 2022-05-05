import { AfterViewInit, Component, OnInit } from '@angular/core';
import { waitForAsync } from '@angular/core/testing';
import { delay, map, Subject } from 'rxjs';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.scss'],
})
export class FirstPageComponent {
  constructor() {}
}
