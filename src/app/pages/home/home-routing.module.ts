import { AttendanceFormComponent } from './attendance/attendance-form/attendance-form.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { ProductFormComponent } from './product/product-form/product-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home.component';
import { OrderComponent } from './order/order.component';
import { ProductComponent } from './product/product.component';
import { UserFormComponent } from './user/user-form/user-form.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
        // canActivate: [AuthGuard],
      },
      { path: 'user', component: UserComponent },
      { path: 'user-form', component: UserFormComponent },
      { path: 'product', component: ProductComponent },
      { path: 'product-form', component: ProductFormComponent },
      { path: 'order', component: OrderComponent },
      { path: 'attendance', component: AttendanceComponent },
      { path: 'attendance-form', component: AttendanceFormComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule { }
