import { Component, OnInit } from '@angular/core';
import { SalesPerson } from "./sales-person";

@Component({
  selector: 'ntg-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  title = "FirstRouteProject";
  // create an array of objects
  salesPersonList: SalesPerson[] = [
    new SalesPerson("ahmed", "eldeeb", "ahmedeldeeb@gmail.com", 50000),
    new SalesPerson("omar", "ahmed", "omar@gmail.com", 40000),
    new SalesPerson("mahmoud", "mohamed", "mahmoud@gmail.com", 90000),
    new SalesPerson("yasser", "elghandour", "yasser@gmail.com", 60000),
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
