import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

type Product = {
  id: number;
  nombre: string;
  costo: string;
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title: string = 'Proyecto Angular Santex';
  showTable: boolean = true;
  year!: number;
  pageSize!: number;

  products: Product[] = [
    { id: 1, nombre: 'Calcetines', costo: '9177.07' },
    { id: 2, nombre: 'Chaqueta', costo: '3604.82' },
    { id: 3, nombre: 'Camiseta', costo: '9752.57' },
    { id: 4, nombre: 'Chaqueta', costo: '2068.68' },
    { id: 5, nombre: 'Gorra', costo: '4691.97' },
    { id: 6, nombre: 'Vestido', costo: '9495.55' },
    { id: 7, nombre: 'Camiseta', costo: '6951.28' },
    { id: 8, nombre: 'Sombrero', costo: '8278.88' },
    { id: 9, nombre: 'Gorra', costo: '9231.32' },
    { id: 10, nombre: 'Chaqueta', costo: '6667.12' },
  ];

  displayedColumns: string[] = ['id', 'nombre', 'costo'];
  dataSource = new MatTableDataSource<Product>(this.products);

  ngOnInit(): void {
    this.year = new Date().getFullYear();
  }

  switchData() {
    this.showTable = !this.showTable;
  }
}
