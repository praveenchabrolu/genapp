import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-display',
  templateUrl: './data-display.component.html',
  styleUrls: ['./data-display.component.css']
})
export class DataDisplayComponent implements OnInit {

  public data: any = [
    {
      "vin": 12345,
      "year": 2010,
      "brand": "BMW",
      "color": "White"
    },
    {
      "vin": 12346,
      "year": 2011,
      "brand": "Audi",
      "color": "White"
    },
    {
      "vin": 12347,
      "year": 2012,
      "brand": "Jaguar",
      "color": "White"
    },
    {
      "vin": 12348,
      "year": 2013,
      "brand": "Honda",
      "color": "White"
    },
    {
      "vin": 12349,
      "year": 2014,
      "brand": "Toyota",
      "color": "White"
    },
    {
      "vin": 12340,
      "year": 2015,
      "brand": "BMW",
      "color": "White"
    },
    {
      "vin": 12341,
      "year": 2016,
      "brand": "BMW",
      "color": "Black"
    },
    {
      "vin": 12342,
      "year": 2017,
      "brand": "BMW",
      "color": "Green"
    },
    {
      "vin": 12343,
      "year": 2018,
      "brand": "BMW",
      "color": "Red"
    },
    {
      "vin": 12344,
      "year": 2019,
      "brand": "Ford",
      "color": "White"
    }
  ];
  public columns: any = [
    {
      'label': 'Vin',
      'field': 'vin',
      'sort': true,
      'filter': true,
      'filterPlaceHolder': 'Search Vin'
    },
    {
      'label': 'Year',
      'field': 'year',
      'sort': true,
      'filter': true,
      'filterPlaceHolder': 'Search'
    },
    {
      'label': 'Brand',
      'field': 'brand',
      'sort': true,
      'filter': true,
      'filterPlaceHolder': 'Search'
    },
    {
      'label': 'Color',
      'field': 'color',
      'sort': true,
      'filter': true,
      'filterPlaceHolder': 'Search'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
