import { Component, OnInit } from '@angular/core';
import { ClrDatagridSortOrder } from '@clr/angular';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  products: any[] = [];
  descSort: any;

  constructor(private apiService: ApiService) {
    this.descSort = ClrDatagridSortOrder.DESC;
  }

  ngOnInit(): void {
    this.apiService.get('/products').subscribe((res) => {
      this.products = res;
      console.log('res >> ', res);
    });
  }

  onAdd(): void {
    console.log('onAdd :>> ', 'add...');
  }

  onEdit(item: any): void {
    console.log('onEdit item :>> ', item);
  }

  onDelete(item: any): void {
    console.log('onDelete item :>> ', item);
  }
}
