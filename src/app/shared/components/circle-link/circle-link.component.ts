import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-circle-link',
  templateUrl: './circle-link.component.html',
  styleUrls: ['./circle-link.component.scss']
})
export class CircleLinkComponent implements OnInit {

  @Input()
  title: string;

  @Input()
  href: string;

  @Input()
  target: string;

  @Input()
  rel: string;

  constructor() { }

  ngOnInit(): void {
  }

}
