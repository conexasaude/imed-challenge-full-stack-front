import { Component, OnInit } from '@angular/core';
import { ClrDatagridSortOrder } from '@clr/angular';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent implements OnInit {
  attendances: any[] = [];
  descSort: any;

  constructor(private apiService: ApiService) {
    this.descSort = ClrDatagridSortOrder.DESC;
  }

  ngOnInit(): void {
    this.apiService.get('/attendance').subscribe((res) => {
      this.attendances = res;
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

  getStrPatient(patient: any[]): string[] {
    console.log('patient :>> ', patient);
    return patient.map((i) => i?.id);
  }

}
