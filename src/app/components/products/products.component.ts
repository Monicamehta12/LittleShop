import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: any[] = []; // Variable to store products data
  paginatedProducts: any[] = []; // Variable to store paginated products
  currentPage: number = 1;
  pageSize: number = 5; // Number of products per page

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.getAllProducts();
  }

  getAllProducts() {
    this.productsService.fetchProducts().subscribe(
      (data) => {
        this.products = data.products;
        console.log(this.products)
        this.setPaginatedProducts();
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
  }

  setPaginatedProducts() {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.paginatedProducts = this.products.slice(startIndex, endIndex);
  }

  onPageChange(page: number) {
    this.currentPage = page;
    this.setPaginatedProducts();
  }
}
