import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ProductService } from './service/product.service';
import { MatPaginator } from '@angular/material/paginator';

type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: Array<string>;
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
  title: string = 'Proyecto Angular Santex';
  showTable: boolean = true;
  year!: number;
  pageSize!: number;
  products: Product[] = [];

  displayedColumns: string[] = ['id', 'title', 'price', 'stock'];

  dataSource = new MatTableDataSource<Product>(this.products);

  constructor(private productServ: ProductService) {}

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.year = new Date().getFullYear();
    this.getAllProducts();
  }

  getAllProducts(): void {
    this.productServ.getAll().subscribe((data) => {
      this.dataSource = new MatTableDataSource<Product>(data['products']);
      this.dataSource.paginator = this.paginator;
    });
  }

  switchData() {
    this.showTable = !this.showTable;
    this.getAllProducts();
  }
}
