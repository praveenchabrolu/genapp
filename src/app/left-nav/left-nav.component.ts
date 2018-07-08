import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-nav',
  templateUrl: './left-nav.component.html',
  styleUrls: ['./left-nav.component.css']
})
export class LeftNavComponent implements OnInit {

public idStr: string = 'submenu-2';
public navs:  any[] = [
  {
    "id": 1,
    "label": 'Menu1',
    childItems: [
      {
        "id": 1,
        "label": 'Sub Menu1'
      },
      {
        "id": 2,
        "label": 'Sub Menu2'
      },
      {
        "id": 3,
        "label": 'Sub Menu3'
      },
      {
        "id": 4,
        "label": 'Sub Menu4'
      }
    ]
  },
  {
    "id": 2,
    "label": 'Menu2',
    childItems: [
      {
        "id": 1,
        "label": 'Sub Menu1'
      },
      {
        "id": 2,
        "label": 'Sub Menu2'
      },
      {
        "id": 3,
        "label": 'Sub Menu3'
      },
      {
        "id": 4,
        "label": 'Sub Menu4'
      }
    ]
  },
  {
    "id": 3,
    "label": 'Menu3',
    childItems: [
      {
        "id": 1,
        "label": 'Sub Menu1'
      },
      {
        "id": 2,
        "label": 'Sub Menu2'
      },
      {
        "id": 3,
        "label": 'Sub Menu3'
      },
      {
        "id": 4,
        "label": 'Sub Menu4'
      }
    ]
  }
];
  constructor() { }

  ngOnInit() {
  }

}
