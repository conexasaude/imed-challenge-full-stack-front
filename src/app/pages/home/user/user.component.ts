import { Component, OnInit } from '@angular/core';
import { ClrDatagridSortOrder } from '@clr/angular';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  users: any[] = [];
  descSort: any;

  constructor(private apiService: ApiService) {
    this.descSort = ClrDatagridSortOrder.DESC;
  }

  ngOnInit(): void {
    this.apiService.get('/users').subscribe((res) => {
      this.users = res;
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
