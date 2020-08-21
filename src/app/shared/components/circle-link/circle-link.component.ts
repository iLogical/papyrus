import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-circle-link',
  templateUrl: './circle-link.component.html',
  styleUrls: ['./circle-link.component.scss']
})
export class CircleLinkComponent implements OnInit {

  @Input()
  public title: string;

  @Input()
  public href: string;

  @Input()
  public target: string;

  @Input()
  public rel: string;

  @Input()
  public ariaLabel: string;

  constructor() { }

  ngOnInit(): void {
  }

}
