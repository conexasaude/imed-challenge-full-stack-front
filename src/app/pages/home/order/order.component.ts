import { Component, OnInit } from '@angular/core';
import { ClrDatagridSortOrder } from '@clr/angular';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
})
export class OrderComponent implements OnInit {
  orders: any[] = [];
  descSort: any;

  constructor(private apiService: ApiService) {
    this.descSort = ClrDatagridSortOrder.DESC;
  }

  ngOnInit(): void {
    this.apiService.get('/carts').subscribe((res) => {
      this.orders = res;
      console.log('res >> ', res);
    });
  }

  onExport(): void {
    console.log('onAdd :>> ', 'add...');
  }

  onEdit(item: any): void {
    console.log('onEdit item :>> ', item);
  }

  onDelete(item: any): void {
    console.log('onDelete item :>> ', item);
  }

  getStrItens(products: any[]): string[] {
    return products.map((i) => i?.title);
  }
}
